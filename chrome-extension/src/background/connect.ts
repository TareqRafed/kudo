import browser from 'webextension-polyfill';

export const ports: Record<number, browser.Runtime.Port> = {};

browser.runtime.onConnect.addListener(port => {
  console.log('Connected:', port.name);

  // Check if it's a tab connection
  if (port.sender && port.sender.tab?.id) {
    const tabId = port.sender.tab.id;
    ports[tabId] = port;

    port.onMessage.addListener(msg => {
      console.log(`Message from Tab ${tabId}:`, msg);
    });

    port.onDisconnect.addListener(tab => {
      if (tab.sender?.tab?.id) delete ports[tab.sender?.tab?.id];
    });
  }
});
