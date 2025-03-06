'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/Sidebar';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Mail,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import SidebarBanner from './sidebarBanner';
import { NavMain } from './sidebarMain';
import { TeamSwitcher } from './sidebarTeamSwitcher';
import { NavUser } from './sidebarUser';
import { SidebarSublinks } from './sidebarSublinks';
import { KeyboardShortcut, TooltipContent } from '@kudo/ui';
import { Children } from 'react';

const data = {
  navMain: [
    {
      title: 'Projects',
      url: '/~',
      tooltip: {
        children: (
          <>
            <KeyboardShortcut>G</KeyboardShortcut>o <KeyboardShortcut>P</KeyboardShortcut>rojects
          </>
        ),
      },

      icon: Home,
      isActive: true,
    },
    {
      title: 'Invitations',
      url: '/~/settings/invitations',
      tooltip: {
        children: (
          <>
            <KeyboardShortcut>G</KeyboardShortcut>o <KeyboardShortcut>I</KeyboardShortcut>nvitations
          </>
        ),
      },
      icon: Mail,
    },
    {
      title: 'Settings',
      url: '/~/settings',
      tooltip: {
        children: (
          <>
            <KeyboardShortcut>G</KeyboardShortcut>o <KeyboardShortcut>S</KeyboardShortcut>ettings
          </>
        ),
      },

      icon: Settings2,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarBanner />
        <SidebarSublinks />
        <TeamSwitcher />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
