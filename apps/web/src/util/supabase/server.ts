import { createServerClient } from '@supabase/ssr';
import { createClient as jsCreateClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import type { Database } from '@kudo/shared';
import { env } from '@/lib/env';

export async function createClient() {
  const cookieStore = await cookies();

  // Create a server's supabase client with newly configured cookie,
  // which could be used to maintain user's session
  return createServerClient<Database>(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}

export async function createServiceRoleClient() {
  return jsCreateClient<Database>(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_API_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
