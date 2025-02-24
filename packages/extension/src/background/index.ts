import browser from 'webextension-polyfill';
import './interface';
import './supabase';
import './session';

import { sendMessage } from '@kudo/shared';
import { isContentOnScreen, ports } from './connect';

const updateIcon = (on: boolean) => {
  on ? browser.action.setIcon({ path: 'icon-128-on.png' }) : browser.action.setIcon({ path: 'icon-128-off.png' });
};

const syncAction = async (tabId: number) => {
  const onScreen = isContentOnScreen(tabId);
  updateIcon(onScreen);
};

const toggleKudo = async (tabId: number) => {
  try {
    const alredyContentInjected = (await sendMessage({ action: 'PING' }, { tabId: tabId })).data === 'PONG'; // check if script is injected, might not be connected
    if (alredyContentInjected) {
      await sendMessage({ action: 'TOGGLE', payload: { isOnScreen: !!ports[tabId] } }, { tabId: tabId });
      await syncAction(tabId);
      return isContentOnScreen(tabId);
    }
  } catch {
    await browser.scripting.executeScript({
      target: { tabId: tabId },
      files: ['kudo/index.iife.js'],
    });
    updateIcon(true); // race condition happens before injecting the script, might not show on ports
  }

  return true;
};

const handleActionClick = async (tab: browser.Tabs.Tab) => {
  if (!tab.id) return;
  await toggleKudo(tab.id);
};

const handleTabUpdate = async (tabId: number) => {
  const onScreen = ports[tabId];
  if (onScreen) {
    browser.scripting.executeScript({
      target: { tabId: tabId },
      files: ['kudo/index.iife.js'],
    });
  }
};

browser.tabs.onActivated.addListener(async (activeInfo) => syncAction(activeInfo.tabId));
browser.action.onClicked.addListener(handleActionClick);
browser.tabs.onUpdated.addListener(handleTabUpdate);
