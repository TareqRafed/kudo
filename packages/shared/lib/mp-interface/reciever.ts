import type { Message, ResponseMessage } from './types';

export function addMessageListener(
  handler: (message: Message, sender: chrome.runtime.MessageSender) => Promise<ResponseMessage<unknown>> | void,
): void {
  chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
    handler(message, sender)
      ?.then(sendResponse)
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Indicate that the response will be sent asynchronously
  });
}
