// Interface between background and other components
import type { Database } from '@extension/shared';
import { addMessageListener } from '@extension/shared';
import { isUserLoggedIn, supabase } from './supabase';

const refreshSession = async () => {
  const userLoginState = await isUserLoggedIn();
  if (!userLoginState) chrome.tabs.create({ url: 'http://localhost:3000/en/dashboard' });
};

addMessageListener(async message => {
  if (message.action === 'FETCH_DATA') {
    // for some reason ts is unable to resolve the type, that's why im narrowing
    const result = await supabase.from(message.payload as keyof Database['public']['Tables']).select();
    return { success: true, data: result };
  }

  if (message.action === 'REQUEST_LOGIN') {
    await refreshSession();
    return { success: true, data: 'User requested login' };
  }

  // if (message.action === 'INSERT_DATA') {
  //   const result = await supabase.from(message.payload).select();
  //   return { success: true, data: result };
  // }

  return { success: false, error: 'Unknown message type' };
});
