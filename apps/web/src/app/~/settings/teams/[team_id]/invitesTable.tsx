'use client';

import { UserAvatar } from '@/components/Avatar/Avatar';
import { DataTable } from '@/components/DataTable/DataTable';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { getInvites } from '@/queries/invites';
import useSupabaseBrowser from '@/util/supabase/client';
import { useDeleteMutation, useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { QueryData } from '@supabase/supabase-js';
import { useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { formatDistanceToNow } from 'date-fns';
import { Undo2 } from 'lucide-react';

type Row = QueryData<ReturnType<typeof getInvites>>[0];

const columns: ColumnDef<Row>[] = [
  {
    accessorKey: 'email',
    header: 'E-mail',
  },

  {
    accessorKey: 'profile_picture',
    header: 'Invited by',
    cell: ({ row }) => {
      return (
        <span className="flex items-center">
          <UserAvatar
            avatarProps={{ className: 'mr-2' }}
            color={row.original.members?.color ?? ''}
            src={row.original.members?.profile_picture ?? ''}
          />
          <span>{row.original?.members?.display_name}</span>
        </span>
      );
    },
    size: Number.MAX_SAFE_INTEGER,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (row.original.status == 'neutral' ? 'Pending' : ''),
  },
  {
    accessorKey: 'created_at',
    header: 'Invited at',
    cell: ({ row }) => formatDistanceToNow(row.original.created_at, { addSuffix: true }),
  },
  {
    accessorKey: ' ',
    header: ' ',
    size: 0,
    cell: ({ row }) => <RevokeInvitation teamId={row.original.teams.id} email={row.original.email} />,
  },
];

const InvitesTable = ({ teamId }: { teamId: number }) => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQuery(
    getInvites(supabase).eq('team_id', teamId).eq('status', 'neutral').order('created_at', { ascending: false }),
  );

  return <DataTable showCount isLoading={isLoading} className="-mx-3" columns={columns} data={data ?? []} />;
};

export default InvitesTable;

const RevokeInvitation = ({ teamId, email }: { teamId: number; email: string }) => {
  const supabase = useSupabaseBrowser();
  const { toast } = useToast();
  const { mutate, isPending } = useDeleteMutation(
    supabase.from('teams_invitations'),
    ['team_id', 'email'],
    'team_id, email, status',
    {
      revalidateTables: [{ table: 'rpc/team_users_count' }],
      onSuccess: () => {
        toast({ description: 'Invitation revoked' });
      },
      onError: e => {
        toast({
          variant: 'destructive',
          description: e.message,
        });
      },
    },
  );

  const handleDelete = async () => {
    mutate({ email: email, team_id: teamId });
  };

  return (
    <div className="flex p-0">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={isPending}
            onClick={handleDelete}
            className="text-destructive"
            variant={'ghost'}
            size={'icon'}>
            <Undo2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Revoke invitation</TooltipContent>
      </Tooltip>
    </div>
  );
};
