import type { MergeDeep, OverrideProperties } from 'type-fest';
import type { Database as DatabaseGenerated } from './database-generated.types';
export type { Tables } from './database-generated.types';
export type { Json } from './database-generated.types';

export type Functions<T extends keyof DatabaseGenerated['public']['Functions']> =
  DatabaseGenerated['public']['Functions'][T]['Returns'] extends (infer U)[] ? U : never;

// type GetCurrentMemberWithMetadataReturn = Functions<'get_current_member_with_metadata'>;

// const t: Database['public']['Functions']['get_current_member_with_metadata']['Returns']
export type Database = DatabaseGenerated;
