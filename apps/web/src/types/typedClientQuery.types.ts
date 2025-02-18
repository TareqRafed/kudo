import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@kudo/shared';

export type TypedSupabaseClient = SupabaseClient<Database>;
