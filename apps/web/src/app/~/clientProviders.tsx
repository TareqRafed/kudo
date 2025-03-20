'use client';

import { BreadcrumbProvider } from '@/components/Breadcrumb';
import { ExtensionProvider } from '@/hooks/useExtension';
import { useMotions } from '@/hooks/useMotions';
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
  useMotions();
  useNavigationMotions();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TooltipProvider>
          <Toaster />
          <NuqsAdapter>
            <ExtensionProvider>
              <BreadcrumbProvider>{children}</BreadcrumbProvider>
            </ExtensionProvider>
          </NuqsAdapter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
