'use client';

import { UserAvatar } from '@/components/Avatar/Avatar';
import { DataTable } from '@/components/DataTable/DataTable';
import { getMemberTeams } from '@/queries/teams';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import type { QueryData } from '@supabase/supabase-js';
import type { ColumnDef } from '@tanstack/react-table';

type Row = QueryData<ReturnType<typeof getMemberTeams>>[0];

const columns: ColumnDef<Row>[] = [
  {
    accessorKey: 'profile_picture',
    header: 'Member',
    cell: ({ row }) => {
      return (
        <span className="flex items-center">
          <UserAvatar
            color={row.original.members_with_metadata?.color}
            src={row.original.members_with_metadata?.profile_picture ?? ''}
            avatarProps={{ className: 'mr-2' }}
          />
          <div className="flex flex-col">
            <span>{row.original.members_with_metadata?.display_name}</span>
            <span className="text-muted-foreground text-xs">{row.original.members_with_metadata?.email}</span>
          </div>
        </span>
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

const Table = ({ teamId }: { teamId: number }) => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQuery(getMemberTeams(supabase).eq('team_id', teamId));

  return <DataTable isLoading={isLoading} className="-mx-3" columns={columns} data={data ?? []} />;
};

export default Table;
