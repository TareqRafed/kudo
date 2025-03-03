'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Skeleton,
  Loader,
} from '@kudo/ui';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/Sidebar';
import { useQuery, useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { getMemberTeams } from '@/queries/teams';
import useSupabaseBrowser from '@/util/supabase/client';
import IconAvatar from '@/components/IconPicker/IconAvatar';
import { useRouter } from 'next/navigation';
import { useToast } from '@kudo/ui';
import { getCurrentMemberWithMetadata } from '@/queries/members';
import ThemeToggler from '../ThemeToggler';

export function SidebarSublinks() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <ThemeToggler />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
