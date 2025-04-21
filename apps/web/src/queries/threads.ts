import type { TypedSupabaseClient } from '@/types/typedClientQuery.types';
import type { Options } from './util/types';

export const getThreadsByWebsiteId = (client: TypedSupabaseClient, id: string | number) => {
  return client
    .rpc('get_threads_for_website_id', {
      id: Number(id),
    })
    .throwOnError();
};

export const getThreads = (client: TypedSupabaseClient, options: Options = {}) => {
  const query = client
    .from('threads')
    .select(
      'id, created_at, x, y, content, target_selector, resolved, rect, website!inner(projects!inner(domain, id), domain), members(color, profile_picture,display_name), window_height, window_width',
    );
  if (options.search && options.search.value.length > 0) {
    query.ilike('content', `%${options.search.value}%`);
  }

  return query;
};
