import { TooltipProvider } from '@extension/ui';
import type { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return <TooltipProvider delayDuration={400}>{children}</TooltipProvider>;
};

export default Provider;
