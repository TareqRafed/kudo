/**
 * This file hold any logic regarding clicking on the action icon
 */

import type { Message } from '@extension/shared';
import { GlobalStateStorage } from '@extension/storage';

const notifyContent = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, async tabs => {
    try {
      if (tabs.length > 0 && tabs[0].id) {
        await GlobalStateStorage.toggleIsOnScreen();
        const _newState = await GlobalStateStorage.get();
        if (_newState.isOnScreen) {
          chrome.action.setIcon({ path: 'icon-128-on.png' });
        } else {
          chrome.action.setIcon({ path: 'icon-128-off.png' });
        }

        chrome.tabs.query({}, tabs => {
          for (const tab of tabs) {
            // Check if the tab has an id and is valid
            if (tab.id) {
              chrome.tabs.sendMessage<Message>(tab.id, { action: 'ACTION_CLICK', payload: _newState }, response => {
                if (chrome.runtime.lastError) {
                  console.error(`Error sending message to tab ${tab.id}:`, chrome.runtime.lastError.message);
                } else {
                  console.log(`Message sent to tab ${tab.id}:`, response);
                }
              });
            }
          }
        });
      }
    } catch (e) {
      console.error('Something went wrong when action was clicked', e);
    }
  });
};

chrome.action.onClicked.addListener(notifyContent);
