import browser from 'webextension-polyfill';
import type { Message, ResponseType } from './types';

export const sendMessage = <R extends Message>(message: R, options?: { tabId?: number }): Promise<ResponseType<R>> => {
  if (typeof options?.tabId === 'number') {
    return browser.tabs.sendMessage(options.tabId, message);
  }
  return browser.runtime.sendMessage(message);
};
