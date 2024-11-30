import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';
import type { Session } from '@supabase/supabase-js';

type Supabase = Session | undefined;

type SupabaseStorage = BaseStorage<Supabase>;

const storage = createStorage<Supabase>('supabase-storage-key', undefined, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

/**
 * Storing the supabase session in cookie
 */
export const supabaseStorage: SupabaseStorage = {
  ...storage,
};
