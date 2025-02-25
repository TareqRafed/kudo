'use client';

import { DataTable } from '@/components/DataTable/DataTable';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery, useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query';
import type { ColumnDef } from '@tanstack/react-table';
import { useBreadcrumbs } from '../layout';
import { useEffect } from 'react';
import { Header } from '../layout-ui';
import React from 'react';
import { getInvites } from '@/queries/invites';
import type { QueryData } from '@supabase/supabase-js';
import { Check, X } from 'lucide-react';
import { Button } from '@kudo/ui';
import IconAvatar from '@/components/IconPicker/IconAvatar';
import { UserAvatar } from '@/components/Avatar/Avatar';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { getCurrentMemberWithMetadata } from '@/queries/members';

type Row = QueryData<ReturnType<typeof getInvites>>[0];

const columns: ColumnDef<Row>[] = [
  {
    accessorKey: 'name',
    header: 'From',
    size: 0,
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <UserAvatar src={row.original.members?.profile_picture ?? ''} color={row.original.members?.color ?? ''} />
          <span>{row.original.members?.display_name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'teams.name',
    header: 'Team',
    size: Number.MAX_SAFE_INTEGER,
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <IconAvatar name={row.original.teams?.logo} theme={row.original.teams?.theme} className="mr-2 size-5" />
          {row.original.teams?.name}
        </div>
      );
    },
  },

  {
    header: 'State',
    size: 0,
    cell: ({ row }) => {
      const state = row.original.status == 'neutral' ? 'Pending' : '';

      return state;
    },
  },
  {
    accessorKey: '',
    header: ' ',
    size: 0,
    cell: ({ row }) => <InvitationActions teamId={row.original.team_id} />,
  },
];

const Invitations = () => {
  const supabase = useSupabaseBrowser();
  const { data: user } = useQuery(getCurrentMemberWithMetadata(supabase));
  const { data, isLoading, isError } = useQuery(getInvites(supabase).eq('status', 'neutral').eq('email', user?.email), {
    enabled: !!user?.email,
  });

  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([{ label: 'Home', href: '/~' }, { label: 'Settings', href: '/settings' }, { label: 'Invitations' }]);
  }, []);

  return (
    <>
      <Header title="Invitations" description="Team invitations that you have recieved." />
      <DataTable className="-mx-3" isLoading={isLoading} columns={columns} data={data ?? []} />
    </>
  );
};

export default Invitations;

const InvitationActions = ({ teamId }: { teamId: number }) => {
  const supabase = useSupabaseBrowser();
  const { toast } = useToast();
  const query = useQueryClient();
  const { mutate } = useUpdateMutation(supabase.from('teams_invitations'), ['team_id'], 'status', {
    onSuccess: () => {
      toast({ description: 'Invitation Updated' });
      query.invalidateQueries({ queryKey: ['teams'] });
      query.invalidateQueries({ queryKey: ['members_teams'] });
    },
    onError: (e) => {
      toast({
        variant: 'destructive',
        description: e.message ?? 'Something went wrong',
      });
    },
  });
  const handleApprove = async () => {
    mutate({ status: 'positive', team_id: teamId });
  };

  const handleReject = async () => {
    mutate({ status: 'negative', team_id: teamId });
  };

  return (
    <div className="flex p-0">
      <Button onClick={handleApprove} variant={'ghost'} size={'icon'}>
        <Check />
      </Button>
      <Button onClick={handleReject} className="text-destructive" variant={'ghost'} size={'icon'}>
        <X />
      </Button>
    </div>
  );
};
