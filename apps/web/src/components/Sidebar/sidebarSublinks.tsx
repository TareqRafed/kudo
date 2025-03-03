'use client';

import * as React from 'react';
import { SidebarMenu, SidebarMenuItem } from '@/components/Sidebar';
import ThemeToggler from '../ThemeToggler';

export function SidebarSublinks() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="group-data-[collapsible=icon]:hidden flex justify-center">
        <ThemeToggler />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
