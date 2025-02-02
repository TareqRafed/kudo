import browser, { type Runtime } from 'webextension-polyfill';
import type { Message, ResponseMessage } from './types';

export function addMessageListener(
  handler: (message: Message, sender: Runtime.MessageSender) => Promise<ResponseMessage<unknown>> | void,
): void {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    handler(message as Message, sender)
      ?.then(sendResponse)
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Indicate that the response will be sent asynchronously
  });
}
