import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      {children}
    </>
  );
}
