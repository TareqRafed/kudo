// Interface between background and other components
import { addMessageListener } from '@kudo/shared';
import { updateUserState, supabase } from './supabase';
import browser from 'webextension-polyfill';

const requestLogin = async () => {
  const userLoginState = await updateUserState();
  if (!userLoginState) browser.tabs.create({ url: import.meta.env.VITE_PLATFORM_URL });
};

addMessageListener(async (message) => {
  if (message.action === 'RPC') {
    const result = await supabase.rpc(message.payload, { ...message.args });
    if (result.error) return { success: false, error: result.error.message || 'Unknown error' };
    return { success: true, data: result };
  }

  if (message.action === 'REQUEST_LOGIN') {
    await requestLogin();
    return { success: true, data: 'User requested login' };
  }

  if (message.action === 'GET_AUTH') {
    const isLoggedIn = await updateUserState();
    const session = await supabase.auth.getSession();
    if (isLoggedIn) return { success: true, data: session.data.session };

    return { success: false, error: session.error?.message || 'Unknown error' };
  }

  if (message.action === 'PING') {
    return { success: true, data: 'PONG' };
  }

  // if (message.action === 'INSERT_DATA') {
  //   const result = await supabase.from(message.payload).select();
  //   return { success: true, data: result };
  // }

  return { success: false, error: 'Unknown message type' };
});
