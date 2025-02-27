'use client';

import { useBreadcrumbs } from '@/components/Breadcrumb';

const Breadcrumb = ({ teamName }: { teamName: string }) => {
  useBreadcrumbs([
    { label: 'Home', href: '/~' },
    { label: 'Settings', href: '/~/settings' },
    { label: 'Teams', href: '/~/settings/teams' },
    { label: teamName },
  ]);

  return <></>;
};

export default Breadcrumb;
