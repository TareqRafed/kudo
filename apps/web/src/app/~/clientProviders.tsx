'use client';

import { BreadcrumbProvider } from '@/components/Breadcrumb';
import { useMotions } from '@/hooks/useMotions';
import useNotifyExtension from '@/hooks/useNotifyExtension';
import { Toaster, TooltipProvider } from '@kudo/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { useNavigationMotions } from './useNavigaionMotions';

const queryClient = new QueryClient();

/**
 * Client side providers
 */
const ClientProviders = ({ children }: { children: ReactNode }) => {
  useNotifyExtension();
  useMotions();
  useNavigationMotions();
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
