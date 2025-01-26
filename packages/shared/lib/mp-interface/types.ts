import type { PostgrestSingleResponse, Session } from '@supabase/supabase-js';
import type { Database } from '../supabase';
import type { NonFunctionKeys, OnlyFunctionKeys } from '../utils';
import type { GlobalState } from '@extension/storage';

type Functions = keyof Database['public']['Functions'];
type Args<F extends Functions> = Database['public']['Functions'][F]['Args'];

type RPCMessage<F extends Functions = Functions> = F extends Functions
  ? { action: 'RPC'; payload: F; args: Args<F> }
  : never;

export type Message =
  | RPCMessage
  | { action: 'GET_STATE'; payload: NonFunctionKeys<GlobalState> }
  | { action: 'ACTION_CLICK'; payload: { isOnScreen: boolean } }
  | { action: 'TOGGLE_STATE'; payload: OnlyFunctionKeys<GlobalState> }
  | { action: 'REQUEST_LOGIN'; payload: string }
  | { action: 'GET_AUTH'; payload?: string };

export type ResponseMessage<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

type SupabaseRpcResponse<T> = T extends Functions ? T : Functions;

export type ActionResponseMap<T extends Message> = {
  RPC: PostgrestSingleResponse<Database['public']['Functions'][SupabaseRpcResponse<T['payload']>]['Returns']>;
  GET_STATE: GlobalState;
  ACTION_CLICK: { isOneScreen: boolean };
  TOGGLE_STATE: boolean;
  REQUEST_LOGIN: boolean;
  GET_AUTH: Session | null;
};

export type ResponseType<R extends Message> = ResponseMessage<ActionResponseMap<R>[R['action']]>;
