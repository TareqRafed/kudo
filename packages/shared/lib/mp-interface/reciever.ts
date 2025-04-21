import browser, { type Runtime } from 'webextension-polyfill';
import type { Message, ResponseMessage } from './types';

type SyncHandler = (message: Message, sender: Runtime.MessageSender) => void;

export function addMessageListener(
  handler:
    | (<T extends Message>(message: T, sender: Runtime.MessageSender) => Promise<ResponseMessage<T>>)
    | SyncHandler,
): void {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    handler(message as Message, sender)
      ?.then(sendResponse)
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true; // Indicate that the response will be sent asynchronously
  });
}
