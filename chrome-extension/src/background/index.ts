import browser from 'webextension-polyfill';
import './interface';
import './supabase';
import './session';

import { GlobalStateStorage } from '@extension/storage';
import { sendMessage } from '@extension/shared';

const syncAction = async (tabId: number) => {
  const _newState = await GlobalStateStorage.get();
  const onScreen = _newState.TabsOnScreen.includes(tabId);
  if (onScreen) {
    browser.action.setIcon({ path: 'icon-128-on.png' });
  } else {
    browser.action.setIcon({ path: 'icon-128-off.png' });
  }
};

const toggleKudo = async (tabId: number) => {
  await GlobalStateStorage.toggleTabOnScreen(tabId);
  await syncAction(tabId);

  try {
    const alredyContentInjected = (await sendMessage({ action: 'PING' }, { tabId: tabId })).data == 'PONG';
    if (alredyContentInjected) {
      const _newState = await GlobalStateStorage.get();
      const onScreen = _newState.TabsOnScreen.includes(tabId);
      await sendMessage({ action: 'TOGGLE', payload: { isOnScreen: onScreen } }, { tabId: tabId });
      return onScreen;
    }
  } catch {
    browser.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content-ui/index.iife.js'],
    });
  }
  return true;
};

const handleActionClick = async (tab: chrome.tabs.Tab) => {
  if (!tab.id) return;
  await toggleKudo(tab.id);
};

const handleTabUpdate = async (tabId: number) => {
  const _newState = await GlobalStateStorage.get();
  const onScreen = _newState.TabsOnScreen.includes(tabId);

  if (onScreen) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content-ui/index.iife.js'],
    });
  }
};

chrome.tabs.onActivated.addListener(async activeInfo => syncAction(activeInfo.tabId));

chrome.action.onClicked.addListener(handleActionClick);
chrome.tabs.onUpdated.addListener(handleTabUpdate);
