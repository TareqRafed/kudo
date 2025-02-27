'use client';

import { Toaster, TooltipProvider } from '@kudo/ui';
import useNotifyExtension from '@/hooks/useNotifyExtension';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { BreadcrumbProvider, DynamicBreadcrumb } from '@/components/Breadcrumb';

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
          <NuqsAdapter>
            <BreadcrumbProvider>{children}</BreadcrumbProvider>
          </NuqsAdapter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
