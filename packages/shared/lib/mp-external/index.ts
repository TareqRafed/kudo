import type Browser from 'webextension-polyfill';
import * as z from 'zod';

const browser = globalThis.browser || globalThis.chrome;

export const sendToExtension = async (extensionId: string, action: ExternalMessage) => {
  const response = await browser.runtime.sendMessage(extensionId, action);
  return externalMessageResponseSchema.safeParseAsync(response);
};

// TODO
// const sendToWebapp = (urls: string[], action: ExternalMessage): Promise<ExternalMessageResponse> => {};

/**
 * @example
 * ```ts
 * onMessageExternal.addListener(extensionLister(["example.com"]).on('PING', (data) => return { action: "PING"... }))
 * ```
 */
export const extensionListener = (urls: string[]) => {
  // biome-ignore lint/suspicious/noExplicitAny: EventHandler needs to be refactored
  const eventHandlers: Partial<Record<ExternalMessageActions, EventHandler<any>>> = {};

  const isRequestValid = (request: unknown, sender: Browser.Runtime.MessageSender) => {
    const senderHost = new URL(sender.url || '').host;
    const isValid = urls.some((url) => senderHost.includes(new URL(url).host));
    if (!isValid) return false;
    const requestValidated = externalMessageSchema.safeParse(request).data;
    if (!requestValidated) return false;
    return true;
  };

  const listener = {
    on: <T extends ExternalMessageActions>(event: T, handler: EventHandler<T>) => {
      if (!eventHandlers[event]) {
        eventHandlers[event] = handler;
      }
      return listener;
    },
    register: () => async (request: unknown, sender: Browser.Runtime.MessageSender) => {
      if (!isRequestValid(request, sender)) return;
      const { data, success } = externalMessageSchema.safeParse(request);
      if (!success) return;
      const handler = eventHandlers[data.action];
      if (!handler) return;
      const res = await handler(data);
      return res;
    },
  };

  return listener;
};

export const externalMessageSchema = z.union([
  z.object({
    action: z.literal('NEW_SESSION'),
    payload: z.object({
      access_token: z.string().min(1),
      refresh_token: z.string().min(1),
    }),
  }),
  z.object({
    action: z.literal('PING'),
  }),
]);

export const externalMessageResponseSchema = z.union([
  z.object({
    action: z.literal('NEW_SESSION'),
    success: z.boolean(),
  }),
  z.object({
    action: z.literal('PING'),
    response: z.literal('PONG'),
    success: z.boolean(),
  }),
]);

export type ExternalMessageResponse = z.infer<typeof externalMessageResponseSchema>;
export type ExternalMessage = z.infer<typeof externalMessageSchema>;
export type ExternalMessageActions = ExternalMessage['action'];

type EventHandler<A extends ExternalMessageActions> = (
  data: GetExternalMessage<A>,
) => Promise<GetExternalMessageResponse<A>>;

/**
 * @example
 * ```ts
 * GetExternalMessageResponse<'PING'>
 * ```
 */
export type GetExternalMessageResponse<T extends ExternalMessage['action']> = Extract<
  ExternalMessageResponse,
  { action: T }
>;

export type GetExternalMessage<T extends ExternalMessage['action']> = Extract<ExternalMessage, { action: T }>;
