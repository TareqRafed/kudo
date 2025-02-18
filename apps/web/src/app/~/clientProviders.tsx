'use client';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import useNotifyExtension from '@/hooks/useNotifyExtension';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const queryClient = new QueryClient();

/**
 * Client side providers
 */
const ClientProviders = ({ children }: { children: ReactNode }) => {
  useNotifyExtension();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TooltipProvider>
          <Toaster />
          <NuqsAdapter>{children}</NuqsAdapter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
