import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Analytics />
      {children}
    </>
  );
}
