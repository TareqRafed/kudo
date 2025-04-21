import type { TypedSupabaseClient } from '@/types/typedClientQuery.types';

export const getNotifications = (client: TypedSupabaseClient) => {
  return client.from('notifications').select('id, is_read, created_at, title, content, link').throwOnError();
};
