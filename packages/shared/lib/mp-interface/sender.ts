import browser from 'webextension-polyfill';
import type { Message, ResponseType } from './types';

export const sendMessage = <R extends Message>(message: R, options?: { tabId?: number }): Promise<ResponseType<R>> => {
  const send = async () => {
    if (typeof options?.tabId === 'number') {
      return browser.tabs.sendMessage<Message, ResponseType<R>>(options.tabId, message);
    }
    return browser.runtime.sendMessage<Message, ResponseType<R>>(message);
  };

  return send().then((response: ResponseType<R>) => {
    if (response.success === false) {
      throw new Error(response.error);
    }
    return response;
  });
};
