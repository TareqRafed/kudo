// Interface between background and other components
import { addMessageListener } from '@extension/shared';
import { updateUserState, supabase } from './supabase';

const requestLogin = async () => {
  const userLoginState = await updateUserState();
  if (!userLoginState) chrome.tabs.create({ url: 'http://localhost:3000/en/dashboard' });
};

addMessageListener(async message => {
  if (message.action === 'RPC') {
    const result = await supabase.rpc(message.payload, { ...message.args });
    return { success: true, data: result };
  }

  if (message.action === 'REQUEST_LOGIN') {
    await requestLogin();
    return { success: true, data: 'User requested login' };
  }

  if (message.action === 'GET_AUTH') {
    return { success: true, data: await updateUserState() };
  }

  // if (message.action === 'INSERT_DATA') {
  //   const result = await supabase.from(message.payload).select();
  //   return { success: true, data: result };
  // }

  return { success: false, error: 'Unknown message type' };
});
