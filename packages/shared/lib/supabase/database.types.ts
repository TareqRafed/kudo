import type { MergeDeep } from 'type-fest';
import type { Database as DatabaseGenerated } from './database-generated.types';
export type { Tables } from './database-generated.types';
export type { Json } from './database-generated.types';

type RemoveNullOn<T, O extends keyof T = never> = {
  [P in keyof T]: P extends O ? Exclude<T[P], null> : T[P];
};
type RemoveNullExcept<T, E extends keyof T = never> = {
  [P in keyof T]: P extends E ? T[P] : Exclude<T[P], null>;
};

type DBTypes = {
  [P in keyof DatabaseGenerated['public']['Tables']]: DatabaseGenerated['public']['Tables'][P]['Row'];
} & {
  [P in keyof DatabaseGenerated['public']['Views']]: DatabaseGenerated['public']['Views'][P]['Row'];
} & {
  [P in keyof DatabaseGenerated['public']['Functions']]: DatabaseGenerated['public']['Functions'][P]['Returns'] extends (infer U)[]
    ? U
    : never;
};

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Functions: {
        get_threads_for_website_id: {
          Returns: ({
            comments: Threads_with_metadata_Comment[];
            creator: Threads_with_metadata_Creator;
          } & RemoveNullOn<DBTypes['get_threads_for_website_id'], 'id' | 'team_id' | 'resolved' | 'created_at'>)[];
        };
      };
    };
  }
>;

// Helpers
export type Functions<T extends keyof DatabaseGenerated['public']['Functions']> =
  Database['public']['Functions'][T]['Returns'] extends (infer U)[] ? U : never;

export type FunctionsArgs<T extends keyof DatabaseGenerated['public']['Functions']> =
  Database['public']['Functions'][T]['Args'];

export type Views<T extends keyof DatabaseGenerated['public']['Views']> =
  Database['public']['Views'][T]['Row'] extends (infer U)[] ? U : never;

// SUPABASE doesn't infer types for JSON/JSONB
type Threads_with_metadata_Creator = {
  id: string;
  first_name: string;
  last_name: string;
  display_name: string;
  color: string;
  profile_picture: string | null;
};

type Threads_with_metadata_Comment = {
  id: string;
  creator: Threads_with_metadata_Creator;
  content: string;
  created_at: string;
};
