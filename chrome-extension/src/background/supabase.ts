import { initSupabase } from '@extension/shared';

export const supabase = initSupabase();

export const isUserLoggedIn = async () => {
  const { data } = await supabase.auth.getUser();
  return !!data.user;
};
