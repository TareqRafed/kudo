import type { Metadata } from 'next';
import { Montserrat_Alternates, Mitr } from 'next/font/google';
import '@kudo/ui/lib/global.css';
import { SidebarProvider, SidebarTrigger } from '@/components/Sidebar';
import { AppSidebar } from '@/components/Sidebar/index';
import ClientProviders from './clientProviders';
import { cookies } from 'next/headers';
import { DynamicBreadcrumb } from '@/components/Breadcrumb';

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
  // const supabase = await createClient();
  // const queryClient = new QueryClient();
  // await prefetchQuery(queryClient, getMembersWithMetadata(supabase));
  // await prefetchQuery(queryClient, getTeams(supabase));
  // await prefetchQuery(queryClient, getCurrentMemberWithMetadata(supabase));

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <ClientProviders>
      <div className="min-h-screen bg-background p-4 transition-colors selection:bg-secondary selection:text-primary">
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full">
            <div className="mb-5 flex items-center">
              <SidebarTrigger className="mr-2 block lg:hidden" />
              <DynamicBreadcrumb />
            </div>
            {children}
          </main>
        </SidebarProvider>
      </div>
    </ClientProviders>
  );
}
