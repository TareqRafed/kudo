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
        chrome.tabs.sendMessage<Message>(tabs[0].id, { action: 'ACTION_CLICK', payload: _newState });
      }
    } catch (e) {
      console.error('Something went wrong when action was clicked', e);
    }
  });
};

chrome.action.onClicked.addListener(notifyContent);
