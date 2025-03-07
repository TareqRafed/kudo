import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@kudo/shared';
import type { TypedSupabaseClient } from '@/types/typedClientQuery.types';
import { useMemo } from 'react';
import { env } from '@/lib/env';

let client: TypedSupabaseClient;

const getSupabaseBrowserClient = () => {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return client;
};

const useSupabaseBrowser = () => {
  return useMemo(getSupabaseBrowserClient, []);
};

export default useSupabaseBrowser;
