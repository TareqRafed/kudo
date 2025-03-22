import { Mitr, Montserrat_Alternates } from 'next/font/google';
import type { ReactNode } from 'react';
import { TelemetryProvider } from './telemetryProvider';
import type { Metadata } from 'next';
import { env } from '@/lib/env';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import dynamic from 'next/dynamic';

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
  title: 'Collaborate on any webpage',
  description: 'Better Feedback From Your Team',
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),

  openGraph: {
    type: 'website',
    title: 'Kudo – Supercharge Your Workflow',
    description: 'Streamline collaboration with Kudo. Add comments, track bugs, and discuss directly on any webpage.',
    url: 'https://usekudo.com',
    siteName: 'Kudo',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Kudo – Supercharge Your Workflow',
      },
    ],
  },

  // Twitter Card metadata for Twitter sharing
  twitter: {
    card: 'summary_large_image', // Large image Twitter card
    title: 'Collaborate on any webpage',
    description: 'Kudo helps you to collaborate with other web developers',
    images: '/og.png', // Your custom Twitter image
  },

  robots: 'index, follow',
  keywords: 'Kudo, bugs, track, jira, linear, comment, collaborate, web, software',
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

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontUsed = `${MontserratAlternates.variable} ${mitr.variable}`;

  return (
    <html lang={'en'}>
      <body className={`${fontUsed} antialiased`}>
        <TelemetryProvider />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
