'use client';

import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Search, Sparkles } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { UserAvatar } from '@/components/Avatar/Avatar';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery, useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { getCurrentMemberWithMetadata } from '@/queries/members';
import { redirect, useRouter } from 'next/navigation';
import { getNotifications } from '@/queries/notifications';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Fragment } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function NavUser() {
  const { isMobile } = useSidebar();
  const supabase = useSupabaseBrowser();
  const { data: user, isLoading, isError } = useQuery(getCurrentMemberWithMetadata(supabase));

  const router = useRouter();

  if (!user) redirect('/');

  if (isLoading) return <Skeleton className="h-8 w-full" />;

  const logOut = async () => {
    await supabase.auth.signOut();
    router.replace('/');
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              disabled={isError}
              size="sm"
              className="m-0 flex w-fit max-w-[70%] items-center justify-start data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:max-w-full group-data-[collapsible=icon]:!p-1">
              <UserAvatar
                src={user.profile_picture ?? ''}
                color={user.color}
                size={'sm'}
                avatarImageProps={{
                  className: 'size-5 group-data-[collapsible=icon]:size-6',
                }}
                avatarProps={{
                  className: 'size-5 group-data-[collapsible=icon]:size-6',
                }}
              />
              <div className="flex max-w-24 text-left text-sm leading-tight">
                <span className="truncate text-xs">{user.display_name}</span>
              </div>
              <ChevronsUpDown className="size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserAvatar src={user.profile_picture ?? ''} color={user.color} />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate">{user.display_name}</span>
                  <span className="truncate text-xs font-light">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={logOut}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <NotificationsMenu />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

const NotificationsMenu = () => {
  const { isMobile } = useSidebar();
  const supabase = useSupabaseBrowser();
  const {
    data: notificationsRes,
    isLoading: notificationsLoading,
    isError: notificationsError,
  } = useQuery(getNotifications(supabase).limit(5).order('created_at', { ascending: false }));

  const { mutate } = useUpdateMutation(supabase.from('notifications'), ['id'], 'is_read');

  const router = useRouter();

  const emptyNotifications = notificationsRes?.length === 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          disabled={notificationsLoading || notificationsError}
          size="sm"
          className="relative ml-2 w-fit group-data-[collapsible=icon]:hidden">
          {!notificationsLoading && !emptyNotifications && !notificationsRes?.[0]?.is_read ? (
            <span className="absolute right-1 top-1 flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-destructive"></span>
            </span>
          ) : null}
          <Bell />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}>
        {emptyNotifications && <DropdownMenuItem>No Notifications</DropdownMenuItem>}
        {notificationsRes?.map((notification, i) => (
          <Fragment key={notification.id}>
            {i !== 0 && <DropdownMenuSeparator />}
            <DropdownMenuGroup>
              <DropdownMenuItem
                className={cn([
                  'flex flex-col justify-start items-start cursor-pointer',
                  !notification.is_read && 'bg-accent/20',
                ])}
                onClick={() => {
                  mutate({ id: notification.id, is_read: true });
                  router.replace(notification.link);
                }}>
                <DropdownMenuLabel className="text-md m-0 p-0">{notification.title}</DropdownMenuLabel>
                <span className="text-xs">{notification.content}</span>
                <Button
                  onClick={e => {
                    e.stopPropagation();
                    mutate({
                      id: notification.id,
                      is_read: !notification.is_read,
                    });
                  }}
                  variant="link"
                  size={'sm'}
                  className="m-0 h-auto p-0 text-xs">
                  Mark as {!notification.is_read ? 'Read' : 'Unread'}
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
