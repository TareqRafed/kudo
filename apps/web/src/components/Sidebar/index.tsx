'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
  useSidebar,
} from '@/components/Sidebar';
import { NavUser } from './sidebarUser';
import {
  AudioWaveform,
  BookOpen,
  Map,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
  Home,
} from 'lucide-react';
import { TeamSwitcher } from './sidebarTeamSwitcher';
import { NavMain } from './sidebarMain';
import SidebarBanner from './sidebarBanner';

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
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
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
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
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
        <TeamSwitcher />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
