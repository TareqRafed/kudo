import { initSupabase, sendMessage } from '@kudo/shared';
import { hideToolbar } from './actions';

export const supabase = initSupabase();

export const updateUserState = async () => {
  // await GlobalStateStorage.appendTask({ name: 'auth' });
  const { data } = await supabase.auth.getUser();
  const isLoggedIn = !!data.user;
  if (isLoggedIn) subscribeDatabase();
  // await GlobalStateStorage.set((val) => ({ ...val, isLoggedIn }));
  // await GlobalStateStorage.deleteTask({ name: 'auth' });
  // console.log(await GlobalStateStorage.get());
  return isLoggedIn;
};

const subscribeDatabase = async () => {
  const currentUser = await supabase.auth.getUser();
  if (!currentUser.data.user) return;
  const user = currentUser.data.user;

  const teamChannel = supabase
    .channel('schema-db-changes')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'members',
        filter: `id=eq.${user.id}`,
      },
      (d) => {},
    )
    .subscribe();

  const auth = supabase.auth.onAuthStateChange((event) => {
    console.log(event);
    if (event === 'SIGNED_OUT') {
      teamChannel.unsubscribe();
      sendMessage({ action: 'END_AUTH' }).catch(() => console.error('Client did not end session'));
      auth.data.subscription.unsubscribe();
    }
  });
};
