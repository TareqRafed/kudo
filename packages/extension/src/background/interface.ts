// Interface between background and other components
import { addMessageListener } from '@kudo/shared';
import { updateUserState, supabase } from './supabase';
import browser from 'webextension-polyfill';

const requestLogin = async () => {
  const userLoginState = await updateUserState();
  if (!userLoginState) browser.tabs.create({ url: 'http://localhost:3000/~' });
};

addMessageListener(async (message) => {
  if (message.action === 'RPC') {
    const result = await supabase.rpc(message.payload, { ...message.args });
    return { success: !result.error, data: result };
  }

  if (message.action === 'REQUEST_LOGIN') {
    await requestLogin();
    return { success: true, data: 'User requested login' };
  }

  if (message.action === 'GET_AUTH') {
    const isLoggedIn = await updateUserState();
    const session = await supabase.auth.getSession();
    return { success: isLoggedIn, data: session.data.session };
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
