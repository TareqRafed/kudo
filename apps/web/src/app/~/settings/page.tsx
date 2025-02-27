'use client';

import { useBreadcrumbs } from '@/components/Breadcrumb';
import { Container, Header } from './layout-ui';
import { OptionLink, Options, OptionSeparator } from '@/components/Options/Options';

const Settings = () => {
  useBreadcrumbs([
    { label: 'Home', href: '/~' },
    { label: 'Settings', href: '/settings' },
  ]);

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
