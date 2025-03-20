import browser from 'webextension-polyfill';

/**
 * This file holds everything regarding retrieving the session from the webapp
 */

import { supabase, updateUserState } from './supabase';
import { extensionListener } from '@kudo/shared';

const BASE_URL = import.meta.env.VITE_PLATFORM_URL;
const whiteListedWebApps = [`${BASE_URL}`];

const listener = extensionListener(whiteListedWebApps);

listener.on('PING', async () => {
  return {
    action: 'PING',
    response: 'PONG',
    success: true,
  };
});

listener.on('NEW_SESSION', async (data) => {
  supabase.auth.setSession(data.payload);
  const isLoggedIn = await updateUserState();
  return { action: 'NEW_SESSION', success: isLoggedIn };
});

browser.runtime.onMessageExternal.addListener(listener.register());
