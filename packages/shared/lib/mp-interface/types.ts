import type { PostgrestSingleResponse } from '@supabase/supabase-js';
import type { Database } from '../supabase';
import type { NonFunctionKeys, OnlyFunctionKeys } from '../utils';
import type { GlobalState } from '@extension/storage';

type Tables = keyof Database['public']['Tables'];

export type Message =
  | { action: 'FETCH_DATA'; payload: Tables }
  | { action: 'GET_STATE'; payload: NonFunctionKeys<GlobalState> }
  | { action: 'ACTION_CLICK'; payload: GlobalState }
  | { action: 'TOGGLE_STATE'; payload: OnlyFunctionKeys<GlobalState> }
  | { action: 'REQUEST_LOGIN'; payload: string };

export type ResponseMessage<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

type SupabaseFetchResponse<T> = T extends Tables ? T : 'members';

export type ActionResponseMap<T extends Message> = {
  FETCH_DATA: PostgrestSingleResponse<Database['public']['Tables'][SupabaseFetchResponse<T['payload']>]['Row']>;
  GET_STATE: GlobalState;
  ACTION_CLICK: GlobalState;
  TOGGLE_STATE: boolean;
  REQUEST_LOGIN: boolean;
};

export type ResponseType<R extends Message> = ResponseMessage<ActionResponseMap<R>[R['action']]>;
