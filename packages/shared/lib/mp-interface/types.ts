import type { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
import type { Database } from '../supabase';

type Functions = keyof Database['public']['Functions'];
type Args<F extends Functions> = Database['public']['Functions'][F]['Args'];

type RPCMessage<F extends Functions = Functions> = F extends Functions
  ? { action: 'RPC'; payload: F; args: Args<F> }
  : never;

export type Message =
  | RPCMessage
  | { action: 'TOGGLE'; payload: { isOnScreen: boolean } }
  | { action: 'REQUEST_LOGIN'; payload: string }
  | { action: 'GET_AUTH'; payload?: string }
  | { action: 'END_AUTH'; payload?: string }
  | { action: 'PING'; payload?: string };

export type ResponseMessage<T> = SuccessMessage<T> | UnsuccessMessage;

export type SuccessMessage<T> = {
  success: true;
  data?: T;
};

export type UnsuccessMessage = {
  success: false;
  error: string;
};

type SupabaseRpcResponse<T> = T extends Functions ? T : Functions;

export type MessageResponseMap<T extends Message> = {
  RPC: PostgrestSingleResponse<Database['public']['Functions'][SupabaseRpcResponse<T['payload']>]['Returns']>;
  TOGGLE: { isOnScreen: boolean };
  REQUEST_LOGIN: boolean;
  GET_AUTH: Session | null;
  END_AUTH: 'OK';
  PING: 'PONG';
};

export type ResponseType<R extends Message> = ResponseMessage<MessageResponseMap<R>[R['action']]>;
