import type { TypedSupabaseClient } from '@/types/typedClientQuery.types';
import type { Options } from './util/types';
import { getPagination } from './util/pagination';

export const getWebsites = (client: TypedSupabaseClient, options: Options = {}) => {
  const query = client
    .from('website')
    .select(
      `
		*,
		threads(id)
	`,
      { count: 'exact' },
    )
    .order('created_at', { ascending: false });

  if (options.search && options.search.value.length > 0) {
    query.ilike('domain', `%${options.search.value}%`);
  }

  if (options.pagination) {
    const { page, size } = options.pagination;
    const { from, to } = getPagination(page, size);
    query.range(from, to);
  }
  return query.throwOnError();
};
