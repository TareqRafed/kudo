import { TypedSupabaseClient } from '@/types/typedClientQuery.types';

export const getTeams = (client: TypedSupabaseClient) => {
  return client.from('teams').select('id, name, logo, theme, tiers(name)').throwOnError();
};

export const getMemberTeams = (client: TypedSupabaseClient) => {
  return client
    .from('members_teams')
    .select(
      'members_with_metadata(email, first_name, last_name, selected_team_id, display_name, profile_picture, color), teams(id, name, logo, theme, tiers!teams_tier_id_fkey(name, max_users)), is_admin',
    )
    .throwOnError();
};
