import { Container, Header } from '../../layout-ui';
import { notFound } from 'next/navigation';
import { fetchQuery, prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { createClient } from '@/util/supabase/server';
import Table from './table';
import { getMemberTeams, getTeams } from '@/queries/teams';
import AddMembersDialog from './addMembersDialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@kudo/ui';
import InvitesTable from './invitesTable';
import Breadcrumb from './breadcrumb';
import TeamSettingsDrawer from './teamSettingsDrawer';

const Team = async ({ params }: { params: Promise<{ team_id: string }> }) => {
  const parameters = await params;
  if (!parameters.team_id) notFound();
  const team_id = Number(parameters.team_id);
  const supabase = await createClient();
  const user = (await supabase.auth.getUser()).data?.user;
  const queryClient = new QueryClient();
  await prefetchQuery(queryClient, getMemberTeams(supabase).eq('team_id', team_id));
  const teamRes = await fetchQuery(queryClient, getTeams(supabase).eq('id', team_id).maybeSingle());
  if (!teamRes.data || !user) notFound();
  const userRes = await fetchQuery(
    queryClient,
    getMemberTeams(supabase).eq('member_id', user.id).eq('team_id', team_id).maybeSingle(),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Breadcrumb teamName={teamRes.data.name} />
      <Header title={teamRes.data.name} description={`Invite Members to ${teamRes.data.name}`}>
        {userRes.data?.is_admin && (
          <div className="flex justify-end space-x-2">
            <AddMembersDialog teamId={team_id} />
            <TeamSettingsDrawer teamId={team_id} />
          </div>
        )}
      </Header>
      <Tabs defaultValue="members">
        <Container>
          <TabsList>
            <TabsTrigger value="members">Members</TabsTrigger>
            {userRes.data?.is_admin && <TabsTrigger value="invites">Invites</TabsTrigger>}
          </TabsList>
        </Container>
        <TabsContent value="members">
          <Table teamId={team_id} />
        </TabsContent>
        <TabsContent value="invites">
          <InvitesTable teamId={team_id} />
        </TabsContent>
      </Tabs>
    </HydrationBoundary>
  );
};

export default Team;
