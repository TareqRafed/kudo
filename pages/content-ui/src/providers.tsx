import { Toaster, TooltipProvider } from '@extension/ui';
import type { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster className="dark" />
      <TooltipProvider delayDuration={800}>{children}</TooltipProvider>
    </>
  );
};

export default Provider;
