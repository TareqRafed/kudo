import type { Metadata } from 'next';
import '@kudo/ui/lib/global.css';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
// import { getLangDir } from 'rtl-detect';
import { Toaster, TooltipProvider } from '@kudo/ui';
import { SquareBackground } from '@/components/SquareBackground';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  //  const direction = getLangDir(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TooltipProvider>
          <Toaster />
          <div className="p-[1rem] min-h-screen bg-background selection:bg-secondary selection:text-primary transition-colors">
            <Header className="md:hidden flex mb-5 z-20 relative" />
            <div className="rounded-lg bg-gradient-to-b overflow-hidden from-background-gradient via-background-gradient2 via-50% to-transparent relative z-20">
              <Header className="md:flex hidden relative z-20" />
              <SquareBackground />
              <div className="min-h-[100vh] z-20 relative">{children}</div>
            </div>
          </div>
        </TooltipProvider>
        <Footer className="relative z-20" />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
