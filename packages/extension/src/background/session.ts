import browser from 'webextension-polyfill';
import * as z from 'zod';

/**
 * This file holds everything regarding retrieving the session from the webapp
 */

import { supabase, updateUserState } from './supabase';

const externalMessageSchema = z.object({
  action: z.enum(['NEW_SESSION']),
  payload: z.object({
    access_token: z.string().min(1),
    refresh_token: z.string().min(1),
  }),
});

const whiteListedWebApps = ['http://localhost:3000/~'];
browser.runtime.onMessageExternal.addListener(async (request, sender) => {
  // if (!whiteListedWebApps.includes(sender.url || '')) return;

  const requestValidated = externalMessageSchema.safeParse(request).data;
  if (!requestValidated) return;
  /**
   * Tab /dashboard is opened which sends the supabase session
   */
  if (requestValidated.action === 'NEW_SESSION') {
    try {
      supabase.auth.setSession(requestValidated.payload);
      await updateUserState();
    } catch {
      console.error('Couldnt Log user in');
      // TODO: Add bug report here to track if someone reached this block
    }
  }
});
