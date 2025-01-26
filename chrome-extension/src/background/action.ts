/**
 * This file hold any logic regarding clicking on the action icon
 */

import type { Message } from '@extension/shared';
import { GlobalStateStorage } from '@extension/storage';

const notifyContent = async (tab: chrome.tabs.Tab) => {
  if (!tab.id) return;

  await GlobalStateStorage.toggleTabOnScreen(tab.id);
  const _newState = await GlobalStateStorage.get();
  const onScreen = _newState.TabsOnScreen.includes(tab.id);
  if (onScreen) {
    chrome.action.setIcon({ path: 'icon-128-on.png' });
  } else {
    chrome.action.setIcon({ path: 'icon-128-off.png' });
  }

  chrome.tabs.sendMessage<Message>(tab.id, { action: 'ACTION_CLICK', payload: { isOnScreen: onScreen } }, response => {
    if (chrome.runtime.lastError) {
      console.error(`Error sending message to tab ${tab.id}:`, chrome.runtime.lastError.message);
    } else {
      console.log(`Message sent to tab ${tab.id}:`, response);
    }
  });
};

chrome.tabs.onActivated.addListener(async activeInfo => {
  const _newState = await GlobalStateStorage.get();
  const onScreen = _newState.TabsOnScreen.includes(activeInfo.tabId);
  if (onScreen) {
    chrome.action.setIcon({ path: 'icon-128-on.png' });
  } else {
    chrome.action.setIcon({ path: 'icon-128-off.png' });
  }
});

chrome.action.onClicked.addListener(notifyContent);
