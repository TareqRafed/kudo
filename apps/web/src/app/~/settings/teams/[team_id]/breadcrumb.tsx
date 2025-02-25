'use client';

import { useEffect } from 'react';
import { useBreadcrumbs } from '@/components/Breadcrumb';

const Breadcrumb = ({ teamName }: { teamName: string }) => {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', href: '/~' },
      { label: 'Settings', href: '/~/settings' },
      { label: 'Teams', href: '/~/settings/teams' },
      { label: teamName },
    ]);
  }, []);

  return <></>;
};

export default Breadcrumb;
