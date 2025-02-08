import { Toaster, TooltipProvider } from '@extension/ui';
import type { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </>
  );
};

export default Provider;
