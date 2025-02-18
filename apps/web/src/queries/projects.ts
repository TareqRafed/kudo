import { TypedSupabaseClient } from '@/types/typedClientQuery.types';
import { Options } from './util/types';
import { getPagination } from './util/pagination';

export const getProjects = (client: TypedSupabaseClient, options: Options = {}) => {
  const query = client
    .from('projects')
    .select(`id, domain, created_at, teams(name, theme, logo)`)
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
