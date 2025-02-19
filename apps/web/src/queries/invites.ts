import { TypedSupabaseClient } from '@/types/typedClientQuery.types';

export const getInvites = (
  client: TypedSupabaseClient,
  options?: {
    self?: boolean;
  },
) => {
  const query = client
    .from('teams_invitations')
    .select(
      'email, team_id, teams(id, name, theme, logo), status, created_at, members(display_name, profile_picture, color)',
    );

  if (options?.self) {
    // TODO this is buggy, fix later
    client.auth.getSession().then((val) => {
      const userEmail = val.data.session?.user.email;
      if (userEmail) query.eq('email', userEmail);
    });
  }

  return query.throwOnError();
};

export const actionInvite = (
  client: TypedSupabaseClient,
  options: {
    team_id: string | number;
    accept: boolean;
  },
) => {
  const query = client
    .from('teams_invitations')
    .update({ status: options.accept ? 'positive' : 'negative' })
    .eq('team_id', options.team_id);

  return query.throwOnError();
};
