'use client';

import { Button } from '@kudo/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@kudo/ui';
import { Input } from '@kudo/ui';
import { useActionState, useEffect, useState } from 'react';
import { sendInvitations } from './actions';
import { Alert, AlertDescription } from '@kudo/ui';
import { AlertCircle } from 'lucide-react';
import { useToast } from '@kudo/ui';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import UpgradeToProDialog from '@/components/UpgradeToPro/UpgrateToPro';
import { Skeleton } from '@kudo/ui';
import { cn } from '@/lib/utils';

const InputList = ({ count, errors }: { count: number; errors: { [key: `email${number}`]: string[] } }) =>
  Array.from({ length: count }, (_, i) => (
    <Input
      className={cn([errors?.[`email${i + 1}`] && 'border-destructive'])}
      placeholder={`E-mail ${i + 1}`}
      type="email"
      name={`email${i + 1}`}
      id={`email${i + 1}`}
      key={i}
      autoComplete="off"
    />
  ));

const AddMembersDialog = ({ teamId }: { teamId: number }) => {
  const [inputCount, setInputCount] = useState(5);
  const { toast } = useToast();

  const sendInvitationsTeam = sendInvitations.bind(null, teamId);
  const [state, action, isPending] = useActionState(sendInvitationsTeam, null);

  const supabase = useSupabaseBrowser();
  const {
    data: teamSummary,
    isLoading: teamSummaryLoading,
    isError: teamSummaryError,
  } = useQuery(supabase.rpc('team_users_count', { _team_id: Number(teamId) }).maybeSingle(), { gcTime: 0 });

  useEffect(() => {
    if (!state) return;

    toast({
      title: state.success ? 'Success' : 'Error',
      description: state.message,
      variant: state.success ? 'default' : 'destructive',
    });

    if (state.success) {
      setDialog(false);
    }
  }, [state]);

  const [dialog, setDialog] = useState(false);
  if (teamSummaryLoading || teamSummaryError) return <Skeleton className="h-9 w-36" />;
  const offTheLimit = (teamSummary?.total_count ?? 0) >= (teamSummary?.max_users ?? 0);
  if (offTheLimit)
    return (
      <UpgradeToProDialog teamId={teamId}>
        <DialogTrigger asChild>
          <Button size={'sm'}>Invite Members</Button>
        </DialogTrigger>
      </UpgradeToProDialog>
    );

  return (
    <Dialog onOpenChange={setDialog} open={dialog}>
      <DialogTrigger asChild>
        <Button size={'sm'}>Invite Members</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action} className="space-y-2">
          <DialogHeader>
            <DialogTitle>Invite members</DialogTitle>
            <DialogDescription>Add your team E-mails here, doesn&apos;t matter registered or not</DialogDescription>
            <span className="flex flex-col space-y-2 py-5">
              {state?.success === false && (
                <Alert variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{state?.message}</AlertDescription>
                </Alert>
              )}
              {inputCount >= 8 && (
                <Alert variant="warning">
                  <AlertCircle className="size-4" />
                  <AlertDescription>You can&apos;t invite more than 8 users at once.</AlertDescription>
                </Alert>
              )}
            </span>
          </DialogHeader>
          <InputList errors={state} count={inputCount} />
          <Button
            disabled={inputCount >= 8}
            size={'sm'}
            onClick={() => setInputCount((prev) => (prev >= 8 ? prev : prev + 1))}
            type="button"
            className="w-full"
            variant={'secondary'}
          >
            Invite More
          </Button>
          <DialogFooter>
            <Button size={'sm'} status={isPending ? 'loading' : 'ready'} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMembersDialog;
