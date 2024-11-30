// Interface between background and other components

import { supabaseStorage } from '@extension/storage';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

export type Action =
  | { action: 'NEW_SESSION'; payload: Session }
  | { action: 'GET_USER' }
  | { action: 'REFRESH_SESSION' }
  | { action: 'SET_SESSION' | 'GET_SESSION' | 'CREATE_TAB' | 'GET_TOKEN_COOKIE' | 'TOGGLE'; payload?: string };

chrome.runtime.onMessage.addListener((message: Action, _sender, sendResponse) => {
  if (message.action === 'CREATE_TAB') {
    chrome.tabs.create({ url: message.payload });
  }

  if (message.action === 'GET_USER') {
    supabase.auth.getUser().then(data => {
      sendResponse(data.data.user);
    });
    return true;
  }

  /**
   * Go to webapp login to retrieve cookie and store in CE.
   * Webapp should send the session to the extension
   */
  if (message.action === 'REFRESH_SESSION') {
    chrome.tabs.create({ url: 'https://localhost:3000/en/login' });
  }

  return false;
});

const notifyContent = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs.length > 0 && tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'TOGGLE' } as Action);
    }
  });
};

chrome.action.onClicked.addListener(notifyContent);

const whiteListedWebApps = ['http://localhost:3000/en/dashboard'];
chrome.runtime.onMessageExternal.addListener(function (request: Action, sender) {
  if (!whiteListedWebApps.includes(sender.url || '')) return;

  /**
   * Tab /dashboard is opened which sends the supabase session
   */
  if (request.action == 'NEW_SESSION') {
    try {
      console.log(request);
      supabase.auth.setSession(request.payload);
      supabaseStorage.set(request.payload);
    } catch {
      console.error('Couldnt Log user in');
      // TODO: Add bug report here to track if someone reached this block
    }
  }
});
