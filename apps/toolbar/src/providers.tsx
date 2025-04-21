import { Toaster, TooltipProvider } from '@kudo/ui';
import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { domHelper } from './util';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5mins
    },
  },
});

const Provider = ({ children }: { children: ReactNode }) => {
  const root = domHelper.getRoot();

  return (
    <QueryClientProvider client={queryClient}>
      {root.shadowRoot && <ReactQueryDevtools shadowDOMTarget={root.shadowRoot} />}
      <Toaster />
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </QueryClientProvider>
  );
};

export default Provider;
