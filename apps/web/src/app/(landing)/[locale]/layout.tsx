import type { Metadata } from 'next';
import { Montserrat_Alternates, Mitr, Alexandria, Cairo } from 'next/font/google';
import '@kudo/ui/lib/global.css';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getLangDir } from 'rtl-detect';
import { Toaster, TooltipProvider, Squares } from '@kudo/ui';

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

// Arabic
const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--alexandria',
});
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--cairo',
});

export const metadata: Metadata = {
  title: 'Collaborate on any webpage',
  description: 'Better Feedback From Your Team',

  openGraph: {
    type: 'website',
    title: 'Kudo - Better Feedback From Your Team',
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
    title: 'Collaborate on any webpage',
    description: 'Kudo helps you to collaborate with other web developers',
    images: '/favicon/twitter-image.jpg', // Your custom Twitter image
  },

  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'Kudo, comment, collaborate, web, software',
  authors: [{ name: 'Kudo', url: 'https://trykudo.com' }],

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
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const direction = getLangDir(locale);

  const fontUsed = `${MontserratAlternates.variable} ${mitr.variable}`;

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${fontUsed} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <TooltipProvider>
              <Toaster />
              <div className="p-[1rem] min-h-screen bg-background selection:bg-secondary selection:text-primary transition-colors">
                <Header className="md:hidden flex mb-5 z-20 relative" />
                <div className="rounded-lg bg-gradient-to-b overflow-hidden from-background-gradient via-background-gradient2 via-50% to-transparent relative z-20">
                  <Squares
                    className="w-full h-full absolute left-0 top-0 z-10"
                    direction="diagonal"
                    speed={0.5}
                    squareSize={700}
                    borderColor="#125CBD"
                    hoverFillColor="#125CBD"
                  />

                  <Header className="md:flex hidden relative z-20" />
                  <div className="min-h-[100vh] z-20 relative">{children}</div>
                </div>
              </div>
            </TooltipProvider>
            <Footer className="relative z-20" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
