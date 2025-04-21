import type { TypedSupabaseClient } from '@/types/typedClientQuery.types';

export const getComments = (client: TypedSupabaseClient) => {
  return client
    .from('comments')
    .select('id, content, created_at, thread_id, members(display_name, profile_picture, color)')
    .throwOnError();
};
