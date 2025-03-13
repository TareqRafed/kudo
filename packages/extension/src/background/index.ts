import browser from 'webextension-polyfill';
import './listener';
import './supabase';
import './session';

import { sendMessage } from '@kudo/shared';
import { isContentOnScreen, ports } from './connect';
import { injectContentScript, isContentInjected } from './actions';

const updateIcon = (on: boolean) => {
  on ? browser.action.setIcon({ path: 'icon-128-on.png' }) : browser.action.setIcon({ path: 'icon-128-off.png' });
};

const syncAction = async (tabId: number) => {
  const onScreen = isContentOnScreen(tabId);
  updateIcon(onScreen);
};

const toggleKudo = async (tabId: number) => {
  const alredyContentInjected = await isContentInjected(tabId);
  console.log(alredyContentInjected);
  if (alredyContentInjected) {
    await sendMessage({ action: 'TOGGLE', payload: { isOnScreen: !!ports[tabId] } }, { tabId: tabId });
    await syncAction(tabId);
    return isContentOnScreen(tabId);
  }
  await injectContentScript(tabId);
  updateIcon(true); // race condition happens before injecting the script, might not show on ports
  return true;
};

const handleActionClick = async (tab: browser.Tabs.Tab) => {
  if (!tab.id) return;
  await toggleKudo(tab.id);
};

browser.tabs.onActivated.addListener(async (activeInfo) => syncAction(activeInfo.tabId));
browser.action.onClicked.addListener(handleActionClick);

browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.tabs.create({ url: import.meta.env.VITE_PLATFORM_URL });
  }
});
