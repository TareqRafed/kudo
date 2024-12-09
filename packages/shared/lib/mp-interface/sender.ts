import type { Message, ResponseType } from './types';

export const sendMessage = <R extends Message>(message: R): Promise<ResponseType<R>> => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response: ResponseType<R>) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else if (response?.success) {
        resolve(response);
      } else {
        reject(new Error(response?.error || 'Unknown error'));
      }
    });
  });
};
