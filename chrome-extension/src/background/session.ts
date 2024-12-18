/**
 * This file holds everything regarding retrieving the session from the webapp
 */

import { supabase, updateUserState } from './supabase';

const whiteListedWebApps = ['http://localhost:3000/en/dashboard'];
chrome.runtime.onMessageExternal.addListener(async (request, sender) => {
  if (!whiteListedWebApps.includes(sender.url || '')) return;

  /**
   * Tab /dashboard is opened which sends the supabase session
   */
  if (request.action == 'NEW_SESSION') {
    try {
      supabase.auth.setSession(request.payload);
      await updateUserState();
    } catch {
      console.error('Couldnt Log user in');
      // TODO: Add bug report here to track if someone reached this block
    }
  }
});
