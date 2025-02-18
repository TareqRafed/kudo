'use client';

import { useEffect } from 'react';
import { useBreadcrumbs } from './layout';
import { Container, Header } from './layout-ui';
import { OptionLink, Options, OptionSeparator } from '@/components/Options/Options';

const Settings = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', href: '/~' },
      { label: 'Settings', href: '/settings' },
    ]);
  }, []);

  return (
    <>
      <Header title="Settings" description="Overview of Settings" />
      <Container>
        <Options>
          <OptionLink href={'/~/settings/teams'} label="Teams" />
          <OptionLink href={'/~/settings/account'} label="Account" />
          <OptionSeparator />
          <OptionLink href={'/~/settings/invitations'} label="Invitations" />
        </Options>
      </Container>
    </>
  );
};

export default Settings;
