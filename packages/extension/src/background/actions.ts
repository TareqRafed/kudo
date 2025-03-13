import { sendMessage } from '@kudo/shared';
import { isContentOnScreen, isToolbarActive, ports } from './connect';
import browser from 'webextension-polyfill';

export const injectContentScript = async (tabId: number) => {
  await browser.scripting.executeScript({
    target: { tabId: tabId },
    files: ['kudo/index.iife.js'],
  });
};

export const isContentInjected = async (tabId: number) => {
  try {
    return (await sendMessage({ action: 'PING' }, { tabId: tabId })).data === 'PONG';
  } catch {
    return false;
  }
};

/**
 * Shows the toolbar in the tab, content script should be injected before
 */
export const showToolbar = async (tabId: number) => {
  const isOnScreen = isToolbarActive(tabId);
  if (isOnScreen) return true;

  try {
    const alredyContentInjected = await isContentInjected(tabId);
    if (alredyContentInjected) {
      await sendMessage({ action: 'TOGGLE', payload: { isOnScreen: !!ports[tabId] } }, { tabId: tabId });
    }
  } catch {
    injectContentScript(tabId);
  }

  return true;
};

export const hideToolbar = async (tabId: number) => {
  const isOnScreen = isContentOnScreen(tabId);
  if (!isOnScreen) return true;
  await sendMessage({ action: 'TOGGLE', payload: { isOnScreen: !!ports[tabId] } }, { tabId: tabId });
  return true;
};
