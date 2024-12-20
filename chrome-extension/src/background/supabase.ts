import { initSupabase } from '@extension/shared';
import { GlobalStateStorage } from '@extension/storage';

export const supabase = initSupabase();

export const updateUserState = async () => {
  await GlobalStateStorage.appendTask({ name: 'auth' });
  const { data } = await supabase.auth.getUser();
  const isLoggedIn = !!data.user;
  await GlobalStateStorage.set(val => ({ ...val, isLoggedIn }));
  await GlobalStateStorage.deleteTask({ name: 'auth' });
  return isLoggedIn;
};
