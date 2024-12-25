export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      boards: {
        Row: {
          created_at: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      comments: {
        Row: {
          content: string;
          created_at: string;
          creator_id: string;
          id: number;
          thread_id: number;
        };
        Insert: {
          content: string;
          created_at?: string;
          creator_id: string;
          id?: number;
          thread_id: number;
        };
        Update: {
          content?: string;
          created_at?: string;
          creator_id?: string;
          id?: number;
          thread_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_creator_id_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_creator_id_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_creator_id_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_creator_id_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_thread_id_fkey';
            columns: ['thread_id'];
            isOneToOne: false;
            referencedRelation: 'threads';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_thread_id_fkey';
            columns: ['thread_id'];
            isOneToOne: false;
            referencedRelation: 'threads_with_metadata';
            referencedColumns: ['id'];
          },
        ];
      };
      members: {
        Row: {
          first_name: string;
          id: string;
          last_name: string;
          profile_picture: string | null;
          team_id: number | null;
        };
        Insert: {
          first_name: string;
          id: string;
          last_name: string;
          profile_picture?: string | null;
          team_id?: number | null;
        };
        Update: {
          first_name?: string;
          id?: string;
          last_name?: string;
          profile_picture?: string | null;
          team_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      teams: {
        Row: {
          board_id: number | null;
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          board_id?: number | null;
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          board_id?: number | null;
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'teams_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['board_id'];
          },
        ];
      };
      threads: {
        Row: {
          created_at: string;
          creator_id: string | null;
          id: number;
          rect: Json | null;
          resolved: boolean;
          target_selector: string | null;
          website_id: number | null;
          window_height: number | null;
          window_width: number | null;
          x: number;
          y: number;
        };
        Insert: {
          created_at?: string;
          creator_id?: string | null;
          id?: number;
          rect?: Json | null;
          resolved: boolean;
          target_selector?: string | null;
          website_id?: number | null;
          window_height?: number | null;
          window_width?: number | null;
          x: number;
          y: number;
        };
        Update: {
          created_at?: string;
          creator_id?: string | null;
          id?: number;
          rect?: Json | null;
          resolved?: boolean;
          target_selector?: string | null;
          website_id?: number | null;
          window_height?: number | null;
          window_width?: number | null;
          x?: number;
          y?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_website_id_fkey';
            columns: ['website_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['website_id'];
          },
          {
            foreignKeyName: 'threads_website_id_fkey';
            columns: ['website_id'];
            isOneToOne: false;
            referencedRelation: 'website';
            referencedColumns: ['id'];
          },
        ];
      };
      tiers: {
        Row: {
          created_at: string;
          id: number;
          max_users: number | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          max_users?: number | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          max_users?: number | null;
          name?: string | null;
        };
        Relationships: [];
      };
      website: {
        Row: {
          board_id: number;
          created_at: string;
          domain: string;
          hash_id: string;
          id: number;
        };
        Insert: {
          board_id: number;
          created_at?: string;
          domain: string;
          hash_id: string;
          id?: number;
        };
        Update: {
          board_id?: number;
          created_at?: string;
          domain?: string;
          hash_id?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'website_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'website_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['board_id'];
          },
        ];
      };
    };
    Views: {
      members_with_board: {
        Row: {
          board_id: number | null;
          id: string | null;
          team_id: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['board_id'];
          },
        ];
      };
      members_with_boards: {
        Row: {
          board_id: number | null;
          id: string | null;
          team_id: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_board_id_fkey';
            columns: ['board_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['board_id'];
          },
        ];
      };
      members_with_metadata: {
        Row: {
          board_id: number | null;
          id: string | null;
          team_id: number | null;
          website_id: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      threads_with_metadata: {
        Row: {
          comments: Json | null;
          created_at: string | null;
          creator: Json | null;
          creator_id: string | null;
          id: number | null;
          rect: Json | null;
          resolved: boolean | null;
          target_selector: string | null;
          team_id: number | null;
          website_id: number | null;
          windowHeight: number | null;
          windowWidth: number | null;
          x: number | null;
          y: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_creator_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'threads_website_id_fkey';
            columns: ['website_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['website_id'];
          },
          {
            foreignKeyName: 'threads_website_id_fkey';
            columns: ['website_id'];
            isOneToOne: false;
            referencedRelation: 'website';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Functions: {
      authenticated_allowed_website_insert: {
        Args: {
          target_id: string;
          target_board_id: number;
        };
        Returns: {
          board_id: number | null;
          id: string | null;
          team_id: number | null;
        }[];
      };
      authenticated_allowed_website_read: {
        Args: {
          target_id: string;
        };
        Returns: {
          board_id: number | null;
          id: string | null;
          team_id: number | null;
          website_id: number | null;
        }[];
      };
      create_new_comment: {
        Args: {
          target_thread_id: number;
          target_content: string;
        };
        Returns: {
          content: string;
          created_at: string;
          creator_id: string;
          id: number;
          thread_id: number;
        }[];
      };
      create_new_or_get_website: {
        Args: {
          hash_id: string;
          domain: string;
        };
        Returns: {
          board_id: number;
          created_at: string;
          domain: string;
          hash_id: string;
          id: number;
        }[];
      };
      create_new_thread: {
        Args: {
          x: number;
          y: number;
          website_id: number;
          content: string;
          rect?: Json;
          windowHeight?: number;
          windowWidth?: number;
          target_selector?: string;
        };
        Returns: {
          created_at: string;
          creator_id: string | null;
          id: number;
          rect: Json | null;
          resolved: boolean;
          target_selector: string | null;
          website_id: number | null;
          window_height: number | null;
          window_width: number | null;
          x: number;
          y: number;
        }[];
      };
      get_threads_for_website_id: {
        Args: {
          id: number;
        };
        Returns: {
          comments: Json | null;
          created_at: string | null;
          creator: Json | null;
          creator_id: string | null;
          id: number | null;
          rect: Json | null;
          resolved: boolean | null;
          target_selector: string | null;
          team_id: number | null;
          website_id: number | null;
          windowHeight: number | null;
          windowWidth: number | null;
          x: number | null;
          y: number | null;
        }[];
      };
      hamming_distance: {
        Args: {
          x: string;
          y: string;
        };
        Returns: number;
      };
      update_record: {
        Args: {
          table_name: string;
          record_id: number;
          updates: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes'] | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
