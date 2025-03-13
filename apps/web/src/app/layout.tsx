import type { ReactNode } from 'react';
import { TelemetryProvider } from './telemetryProvider';
import { Mitr, Montserrat_Alternates } from 'next/font/google';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontUsed = `${MontserratAlternates.variable} ${mitr.variable}`;

  return (
    <html lang={'en'} suppressHydrationWarning>
      <body className={`${fontUsed} antialiased`}>
        <TelemetryProvider />
        {children}
      </body>
    </html>
  );
}
