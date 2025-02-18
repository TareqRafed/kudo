import type { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
import type { Database } from '../supabase';
import type { NonFunctionKeys, OnlyFunctionKeys } from '../utils';
import type { GlobalState } from '@kudo/storage';

type Functions = keyof Database['public']['Functions'];
type Args<F extends Functions> = Database['public']['Functions'][F]['Args'];

type RPCMessage<F extends Functions = Functions> = F extends Functions
  ? { action: 'RPC'; payload: F; args: Args<F> }
  : never;

export type Message =
  | RPCMessage
  | { action: 'GET_STATE'; payload: NonFunctionKeys<GlobalState> }
  | { action: 'TOGGLE'; payload: { isOnScreen: boolean } }
  | { action: 'TOGGLE_STATE'; payload: OnlyFunctionKeys<GlobalState> }
  | { action: 'REQUEST_LOGIN'; payload: string }
  | { action: 'GET_AUTH'; payload?: string }
  | { action: 'PING'; payload?: string };

export type ResponseMessage<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

type SupabaseRpcResponse<T> = T extends Functions ? T : Functions;

export type MessageResponseMap<T extends Message> = {
  RPC: PostgrestSingleResponse<Database['public']['Functions'][SupabaseRpcResponse<T['payload']>]['Returns']>;
  GET_STATE: GlobalState;
  TOGGLE: { isOnScreen: boolean };
  TOGGLE_STATE: boolean;
  REQUEST_LOGIN: boolean;
  GET_AUTH: Session | null;
  PING: 'PONG';
};

export type ResponseType<R extends Message> = ResponseMessage<MessageResponseMap<R>[R['action']]>;
