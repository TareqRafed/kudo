import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from '@/components/Sidebar';
import { Home, Mail, Settings2 } from 'lucide-react';
import SidebarBanner from './sidebarBanner';
import { NavMain } from './sidebarMain';
import { TeamSwitcher } from './sidebarTeamSwitcher';
import { NavUser } from './sidebarUser';
import { SidebarSublinks } from './sidebarSublinks';
import { KeyboardShortcut } from '@kudo/ui';
import { createClient } from '@/util/supabase/server';
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getCurrentMemberWithMetadata, getMembersWithMetadata } from '@/queries/members';
import { getTeams } from '@/queries/teams';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export async function AppSidebar() {
  const supabase = await createClient();
  const queryClient = new QueryClient();
  await prefetchQuery(queryClient, getMembersWithMetadata(supabase));
  await prefetchQuery(queryClient, getTeams(supabase));
  await prefetchQuery(queryClient, getCurrentMemberWithMetadata(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <NavUser />
        </SidebarHeader>
        <SidebarContent>
          <NavMain />
        </SidebarContent>
        <SidebarFooter>
          <SidebarBanner />
          <SidebarSublinks />
          <TeamSwitcher />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </HydrationBoundary>
  );
}
