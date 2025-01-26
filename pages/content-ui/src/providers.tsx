import { TooltipProvider } from '@extension/ui';
import type { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return <TooltipProvider delayDuration={800}>{children}</TooltipProvider>;
};

export default Provider;
