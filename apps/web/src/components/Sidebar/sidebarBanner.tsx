import { Card, CardHeader, CardTitle } from '@kudo/ui';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/Sidebar';
import Image from 'next/image';
import ChromeSVG from '@/assets/icons/chrome.svg';

const SidebarBanner = () => {
  return (
    <SidebarMenu className="relative">
      <SidebarMenuItem>
        <Card className="overflow-hidden shadow-none">
          <SidebarMenuButton>
            <Image src={ChromeSVG} alt="Google Chrome Logo" />
            <CardHeader className="p-1 pb-0">
              <CardTitle className="text-sm font-normal group-data-[collapsible=icon]:hidden">
                Install the Extension
              </CardTitle>
            </CardHeader>
          </SidebarMenuButton>
        </Card>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarBanner;
