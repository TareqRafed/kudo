'use client';

import { BreadcrumbProvider, DynamicBreadcrumb } from '@/components/Breadcrumb';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbProvider>
        <div className="mb-5">
          <DynamicBreadcrumb />
        </div>
        <div>{children}</div>
      </BreadcrumbProvider>
    </>
  );
}
