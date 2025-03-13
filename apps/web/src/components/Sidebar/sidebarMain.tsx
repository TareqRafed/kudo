'use client';

import { Home, Mail, Settings2, type LucideIcon } from 'lucide-react';

import { Collapsible, CollapsibleTrigger, KeyboardShortcut, type TooltipContent } from '@kudo/ui';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/Sidebar';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

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

export function NavMain() {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {data.navMain.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
            <SidebarMenuItem>
              <SidebarMenuButton
                className={cn(path === item.url ? 'bg-accent' : '')}
                tooltip={item.tooltip ?? item.title}
                asChild
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
