'use client';

import { ChevronsUpDown, Plus } from 'lucide-react';
import { useEffect } from 'react';

import IconAvatar from '@/components/IconPicker/IconAvatar';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/Sidebar';
import { addMotion } from '@/hooks/useMotions';
import { getCurrentMemberWithMetadata } from '@/queries/members';
import { getMemberTeams } from '@/queries/teams';
import useSupabaseBrowser from '@/util/supabase/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Loader,
  Skeleton,
} from '@kudo/ui';
import { useToast } from '@kudo/ui';
import { useQuery, useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { useRouter } from 'next/navigation';

export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  const router = useRouter();
  const supabase = useSupabaseBrowser();

  const { data: user } = useQuery(getCurrentMemberWithMetadata(supabase));

  const { data, isLoading, isError } = useQuery(getMemberTeams(supabase).eq('member_id', user?.id ?? ''), {
    enabled: !!user?.id,
  });

  const { toast } = useToast();

  const { mutate: updateMember, isPending: updateMemberPending } = useUpdateMutation(
    supabase.from('members'),
    ['id'],
    'selected_team_id',
    {
      revalidateTables: [
        { table: 'members_teams' },
        { table: 'projects' },
        { table: 'members_with_metadata' },
        { table: 'rpc/get_current_member_with_metadata' },
      ],
      onError: (e) => {
        toast({
          description: `Something went wrong ${e}`,
          variant: 'destructive',
        });
      },
    },
  );

  const teams = data;
  const selectedTeam = teams?.find(
    ({ teams, members_with_metadata: members }) => teams?.id == members?.selected_team_id,
  )?.teams; // TODO: clean this

  useEffect(() => {
    teams?.map(({ teams }, i) => {
      addMotion(['t', (i + 1).toString()], () => updateMember({ id: user?.id, selected_team_id: teams.id }));
    });
  }, [teams, user?.id, updateMember]);

  if (isError)
    return (
      <div className="mt-2 flex h-10 w-full items-center justify-center rounded bg-destructive p-1 text-xs group-data-[collapsible=icon]:hidden">
        Failed to retrieve data, please refresh the page
      </div>
    );
  if (isLoading || updateMemberPending)
    return (
      <div className="flex h-12 w-full space-x-1 pt-2">
        <div className="flex h-10 w-14 items-center justify-center rounded">
          <Loader />
        </div>
        <div className="flex size-full flex-col space-y-2">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-2 w-1/2" />
        </div>
      </div>
    );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <IconAvatar theme={selectedTeam?.theme} name={selectedTeam?.logo} />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{selectedTeam?.name}</span>
                <span className="truncate text-xs">{selectedTeam?.tiers?.name}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
            {teams?.map(({ teams }, i) => (
              <DropdownMenuItem
                key={teams?.name}
                className="gap-2 p-2"
                onClick={() => updateMember({ id: user?.id, selected_team_id: teams.id })}
              >
                <div className="flex size-6 items-center justify-center">
                  <IconAvatar className="size-5" theme={teams?.theme} name={teams?.logo} />
                </div>
                {teams?.name}
                <DropdownMenuShortcut>t + {i + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/~/settings/teams/new-team')} className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
