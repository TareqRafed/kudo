import '@kudo/ui/lib/global.css';
import { SidebarProvider, SidebarTrigger } from '@/components/Sidebar';
import { AppSidebar } from '@/components/Sidebar/index';
import ClientProviders from './clientProviders';
import { cookies } from 'next/headers';
import { DynamicBreadcrumb } from '@/components/Breadcrumb';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // const supabase = await createClient();
  // const queryClient = new QueryClient();
  // await prefetchQuery(queryClient, getMembersWithMetadata(supabase));
  // await prefetchQuery(queryClient, getTeams(supabase));
  // await prefetchQuery(queryClient, getCurrentMemberWithMetadata(supabase));

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <ClientProviders>
      <div className="min-h-screen bg-background p-4 transition-colors selection:bg-secondary selection:text-primary">
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full">
            <div className="mb-5 flex items-center">
              <SidebarTrigger className="mr-2 block lg:hidden" />
              <DynamicBreadcrumb />
            </div>
            {children}
          </main>
        </SidebarProvider>
      </div>
    </ClientProviders>
  );
}
