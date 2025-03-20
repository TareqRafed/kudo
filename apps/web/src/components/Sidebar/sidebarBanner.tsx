'use client';

import { Card, CardHeader, CardTitle } from '@kudo/ui';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/Sidebar';
import Image from 'next/image';
import ChromeSVG from '@/assets/icons/chrome.svg';
import useExtension from '@/hooks/useExtension';
import Link from 'next/link';
import { env } from '@/lib/env';

const chromeWebStoreDownloadLink = env.NEXT_PUBLIC_CHROME_WEBSTORE_LINK;

const SidebarBanner = () => {
  const { isInstalled } = useExtension();
  if (isInstalled)
    return (
      <SidebarMenu className="relative">
        <SidebarMenuItem>
          <Card className="overflow-hidden shadow-none">
            <SidebarMenuButton asChild>
              <Link href={chromeWebStoreDownloadLink}>
                <Image src={ChromeSVG} alt="Google Chrome Logo" />
                <CardHeader className="p-1 pb-0">
                  <CardTitle className="text-sm font-normal group-data-[collapsible=icon]:hidden">
                    Install the Extension
                  </CardTitle>
                </CardHeader>
              </Link>
            </SidebarMenuButton>
          </Card>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  return null;
};

export default SidebarBanner;
