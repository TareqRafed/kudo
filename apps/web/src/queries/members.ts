import { TypedSupabaseClient } from '@/types/typedClientQuery.types';

export const getMembersWithMetadata = (
  client: TypedSupabaseClient,
  options?: {
    teamId?: string | number;
  },
) => {
  const query = client.from('members_with_metadata').select('*');

  if (options?.teamId) query.contains('teams', `[{ "id": ${options.teamId} }]`);

  return query.throwOnError();
};

export const getCurrentMemberWithMetadata = (client: TypedSupabaseClient) => {
  const query = client
    .rpc('get_current_member_with_metadata')
    .select(
      'id, display_name, teams!selected_team_id(name, logo, theme), selected_team_id, email, color, profile_picture',
    )
    .maybeSingle();

  return query.throwOnError();
};
