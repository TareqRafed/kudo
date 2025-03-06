'use client';

import type { LucideIcon } from 'lucide-react';

import { Collapsible, CollapsibleTrigger, type TooltipContent } from '@kudo/ui';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/Sidebar';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
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
