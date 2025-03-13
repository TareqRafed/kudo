import browser from 'webextension-polyfill';
import { hideToolbar, injectContentScript } from './actions';

/**
 * Stores which tabs is connected to the bg script
 */
export const ports: Record<number, browser.Runtime.Port> = {};

/**
 * Stores which tabs are about to disconnect
 */
export const abortSchedule: Record<number, NodeJS.Timeout> = {};

/**
 * Just check if toolbar on screen or not, you may want to use isToolbarActive to check if the toolbar is active
 */
export const isContentOnScreen = (tabId: number) => {
  return !!ports[tabId] && !abortSchedule[tabId];
};

/**
 * Checks if the toolbar is active, may not be on screen because of tab refreshing
 */
export const isToolbarActive = (tabId: number) => {
  return !!ports[tabId];
};

const abortDelete = (id: number) => {
  if (abortSchedule[id]) clearTimeout(abortSchedule[id]);
  delete abortSchedule[id];
};

/**
 * Schedule delete from ports which holds which tabs are connected to background, delay is useful for when refresh happens or so.
 */
const scheduleDelete = (id: number) => {
  if (abortSchedule[id]) abortDelete(id);

  const to = setTimeout(() => {
    if (id) delete ports[id];
    hideToolbar(id);
  }, 2000);

  abortSchedule[id] = to;
};

browser.runtime.onConnect.addListener((port) => {
  console.log('Connected:', ports);

  // Check if it's a tab connection
  if (port?.sender?.tab?.id) {
    const tabId = port.sender.tab.id;
    abortDelete(tabId);
    ports[tabId] = port;

    port.onMessage.addListener((msg) => {
      console.log(`Message from Tab ${tabId}:`, msg);
    });

    port.onDisconnect.addListener((tab) => {
      // if (tab.sender?.tab?.id) delete ports[tab.sender?.tab?.id];
      const id = tab.sender?.tab?.id;
      if (!id) return;
      scheduleDelete(id);
    });
  }
});

const handleTabUpdate = async (tabId: number, changeInfo: browser.Tabs.OnUpdatedChangeInfoType) => {
  const onScreen = ports[tabId];
  if (onScreen && changeInfo.status === 'complete') {
    await injectContentScript(tabId);
  }
};
browser.tabs.onUpdated.addListener(handleTabUpdate);
