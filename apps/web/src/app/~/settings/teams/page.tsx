'use client';

import { DataTable } from '@/components/DataTable/DataTable';
import { getMemberTeams } from '@/queries/teams';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import type { ColumnDef } from '@tanstack/react-table';
import { useBreadcrumbs } from '@/components/Breadcrumb';
import { useEffect } from 'react';
import { Button, Badge } from '@kudo/ui';
import { Header } from '../layout-ui';
import { useRouter } from 'next/navigation';
import IconAvatar from '@/components/IconPicker/IconAvatar';
import type { QueryData } from '@supabase/supabase-js';
import { getCurrentMemberWithMetadata } from '@/queries/members';

type Row = QueryData<ReturnType<typeof getMemberTeams>>[0];

const columns: ColumnDef<Row>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const team = row.original.teams;
      return (
        <div className="flex items-center">
          <IconAvatar className="size-5" name={team?.logo} theme={team?.theme} />
          <span className="mx-2">{team?.name}</span>
          <Badge variant={team?.tiers?.name === 'Free' ? 'basic' : 'premium'}>{team?.tiers?.name}</Badge>
        </div>
      );
    },
    size: Number.MAX_SAFE_INTEGER,
  },
  {
    accessorKey: '',
    header: ' ',
    size: 1,
  },
];

const Teams = () => {
  const supabase = useSupabaseBrowser();
  const { data: user } = useQuery(getCurrentMemberWithMetadata(supabase));
  const { data, isLoading, isError, error } = useQuery(getMemberTeams(supabase).eq('member_id', user?.id ?? ''), {
    enabled: !!user?.id,
  });

  useBreadcrumbs([{ label: 'Home', href: '/~' }, { label: 'Settings', href: '/~/settings' }, { label: 'Teams' }]);

  const router = useRouter();

  return (
    <>
      <Header title="Teams" description="Teams that you belong to.">
        <Button size={'sm'} onClick={() => router.push('/~/settings/teams/new-team')}>
          Create Team
        </Button>
      </Header>
      <DataTable
        className="-mx-3"
        isLoading={isLoading}
        columns={columns}
        data={data ?? []}
        onRowClick={(row) => router.push(`/~/settings/teams/${row.teams?.id}`)}
      />
    </>
  );
};

export default Teams;
