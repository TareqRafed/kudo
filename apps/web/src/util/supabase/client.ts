import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/database.types.ts';
import type { TypedSupabaseClient } from '@/types/typedClientQuery.types';
import { useMemo } from 'react';

let client: TypedSupabaseClient | undefined;

const getSupabaseBrowserClient = () => {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  return client;
};

const useSupabaseBrowser = () => {
  return useMemo(getSupabaseBrowserClient, []);
};

export default useSupabaseBrowser;
