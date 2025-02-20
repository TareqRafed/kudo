import type { Metadata } from 'next';
import { Montserrat_Alternates, Mitr } from 'next/font/google';
import '@kudo/ui/lib/global.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Sidebar/sidebar';
import { createClient } from '@/util/supabase/server';
import ClientProviders from './clientProviders';
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getTeams } from '@/queries/teams';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getCurrentMemberWithMetadata, getMembersWithMetadata } from '@/queries/members';
import { cookies } from 'next/headers';

// Latin
const MontserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--montserrat',
});
const mitr = Mitr({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--mitr',
});

export const metadata: Metadata = {
  title: 'Kudo - Never miss a Sale',
  description: 'Mersal is an AI-powered one-click integration to limit your sale loss dramatically',

  openGraph: {
    type: 'website',
    title: 'Kudo - Better Feedback for the Web',
    description: 'Kudo is an AI-powered one-click integration to limit your sale loss dramatically',
    url: 'https://usekudo.com', // Add your actual site URL here
    siteName: 'Kudo',
    images: [
      {
        url: '/og.png', // Your custom Open Graph image
        width: 1200,
        height: 630,
        alt: 'Mersal - Never miss a Sale',
      },
    ],
  },

  // Twitter Card metadata for Twitter sharing
  twitter: {
    card: 'summary_large_image', // Large image Twitter card
    title: 'Mersal - Never miss a Sale',
    description: 'Mersal is an AI-powered one-click integration to limit your sale loss dramatically',
    images: '/favicon/twitter-image.jpg', // Your custom Twitter image
  },

  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'AI, sales automation, sale loss, integration, one-click solution',
  authors: [{ name: 'Mersal Team', url: 'https://usemersal.com' }],

  // Favicon and app icons for devices and browsers
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico', // Your favicon file
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon/apple-touch-icon.png', // Your Apple touch icon
      sizes: '180x180',
    },
    {
      rel: 'icon',
      url: '/favicon/favicon-32x32.png', // Your 32x32 favicon
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/favicon/favicon-16x16.png', // Your 16x16 favicon
      type: 'image/png',
      sizes: '16x16',
    },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const supabase = await createClient();
  const queryClient = new QueryClient();
  await prefetchQuery(queryClient, getMembersWithMetadata(supabase));
  await prefetchQuery(queryClient, getTeams(supabase));
  await prefetchQuery(queryClient, getCurrentMemberWithMetadata(supabase));

  const fontUsed = `${MontserratAlternates.variable} ${mitr.variable}`;

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <html lang={'en'} suppressHydrationWarning>
      <body className={`${fontUsed} antialiased`}>
        <ClientProviders>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="min-h-screen bg-background p-4 transition-colors selection:bg-secondary selection:text-primary">
              <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />
                <main className="w-full">
                  <SidebarTrigger className="block lg:hidden" />
                  {children}
                </main>
              </SidebarProvider>
            </div>
          </HydrationBoundary>
        </ClientProviders>
      </body>
    </html>
  );
}
