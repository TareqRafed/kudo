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

const data = {
  navMain: [
    {
      title: 'Home',
      url: '/~',
      icon: Home,
      isActive: true,
      items: [
        {
          title: 'Projects',
          url: '/~',
        },
      ],
    },
    {
      title: 'Integrations',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Comming Soon',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '/~/settings',
      icon: Settings2,
      items: [
        {
          title: 'Teams',
          url: '/~/settings/teams',
        },
        {
          title: 'Account',
          url: '/~/settings/account',
        },
        {
          title: 'Invitations',
          url: '/~/settings/invitations',
        },
      ],
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
