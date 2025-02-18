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
      colors: {
        Row: {
          hex: string;
          name: string;
        };
        Insert: {
          hex: string;
          name: string;
        };
        Update: {
          hex?: string;
          name?: string;
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
          creator_id?: string;
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
          color: string | null;
          display_name: string;
          first_name: string;
          id: string;
          last_name: string;
          profile_picture: string | null;
          selected_team_id: number | null;
        };
        Insert: {
          color?: string | null;
          display_name?: string;
          first_name: string;
          id: string;
          last_name: string;
          profile_picture?: string | null;
          selected_team_id?: number | null;
        };
        Update: {
          color?: string | null;
          display_name?: string;
          first_name?: string;
          id?: string;
          last_name?: string;
          profile_picture?: string | null;
          selected_team_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_color_fkey';
            columns: ['color'];
            isOneToOne: false;
            referencedRelation: 'colors';
            referencedColumns: ['hex'];
          },
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['selected_team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      members_teams: {
        Row: {
          is_admin: boolean;
          joined_at: string;
          member_id: string;
          team_id: number;
        };
        Insert: {
          is_admin?: boolean;
          joined_at?: string;
          member_id?: string;
          team_id: number;
        };
        Update: {
          is_admin?: boolean;
          joined_at?: string;
          member_id?: string;
          team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'members_teams_member_id_fkey';
            columns: ['member_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'members_teams_member_id_fkey';
            columns: ['member_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'members_teams_member_id_fkey';
            columns: ['member_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'members_teams_member_id_fkey';
            columns: ['member_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'members_teams_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      notifications: {
        Row: {
          content: string;
          created_at: string;
          id: number;
          is_read: boolean;
          link: string;
          notifier_id: string | null;
          title: string;
          user_id: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: number;
          is_read?: boolean;
          link: string;
          notifier_id?: string | null;
          title: string;
          user_id: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: number;
          is_read?: boolean;
          link?: string;
          notifier_id?: string | null;
          title?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'notifications_notifier_id_fkey';
            columns: ['notifier_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_notifier_id_fkey';
            columns: ['notifier_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_notifier_id_fkey';
            columns: ['notifier_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_notifier_id_fkey';
            columns: ['notifier_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
        ];
      };
      projects: {
        Row: {
          created_at: string;
          domain: string;
          id: number;
          team_id: number;
        };
        Insert: {
          created_at?: string;
          domain: string;
          id?: number;
          team_id: number;
        };
        Update: {
          created_at?: string;
          domain?: string;
          id?: number;
          team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'projects_team_id_fkey';
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
          created_by: string;
          id: number;
          logo: string | null;
          name: string;
          theme: string | null;
          tier_id: number;
        };
        Insert: {
          board_id?: number | null;
          created_at?: string;
          created_by?: string;
          id?: number;
          logo?: string | null;
          name: string;
          theme?: string | null;
          tier_id?: number;
        };
        Update: {
          board_id?: number | null;
          created_at?: string;
          created_by?: string;
          id?: number;
          logo?: string | null;
          name?: string;
          theme?: string | null;
          tier_id?: number;
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
            foreignKeyName: 'teams_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_tier_id_fkey';
            columns: ['tier_id'];
            isOneToOne: false;
            referencedRelation: 'tiers';
            referencedColumns: ['id'];
          },
        ];
      };
      teams_invitations: {
        Row: {
          created_at: string;
          email: string;
          status: Database['public']['Enums']['status'];
          team_id: number;
          token: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          status?: Database['public']['Enums']['status'];
          team_id: number;
          token?: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          status?: Database['public']['Enums']['status'];
          team_id?: number;
          token?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'teams_invitations_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_invitations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_invitations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_board';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_invitations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_invitations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'members_with_metadata';
            referencedColumns: ['id'];
          },
        ];
      };
      threads: {
        Row: {
          content: string | null;
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
          content?: string | null;
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
          content?: string | null;
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
            referencedRelation: 'website';
            referencedColumns: ['id'];
          },
        ];
      };
      tiers: {
        Row: {
          created_at: string;
          id: number;
          max_users: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          max_users: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          max_users?: number;
          name?: string;
        };
        Relationships: [];
      };
      website: {
        Row: {
          board_id: number | null;
          created_at: string;
          domain: string;
          hash_id: string;
          id: number;
          project_id: number | null;
        };
        Insert: {
          board_id?: number | null;
          created_at?: string;
          domain: string;
          hash_id: string;
          id?: number;
          project_id?: number | null;
        };
        Update: {
          board_id?: number | null;
          created_at?: string;
          domain?: string;
          hash_id?: string;
          id?: number;
          project_id?: number | null;
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
            foreignKeyName: 'website_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'projects';
            referencedColumns: ['id'];
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
        ];
      };
      members_with_metadata: {
        Row: {
          color: string | null;
          display_name: string | null;
          email: string | null;
          first_name: string | null;
          id: string | null;
          last_name: string | null;
          profile_picture: string | null;
          selected_team_id: number | null;
          teams: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: 'members_color_fkey';
            columns: ['color'];
            isOneToOne: false;
            referencedRelation: 'colors';
            referencedColumns: ['hex'];
          },
          {
            foreignKeyName: 'members_team_id_fkey';
            columns: ['selected_team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      threads_with_metadata: {
        Row: {
          comments: Json | null;
          content: string | null;
          created_at: string | null;
          creator: Json | null;
          creator_id: string | null;
          domain: string | null;
          id: number | null;
          rect: Json | null;
          resolved: boolean | null;
          target_selector: string | null;
          team_id: number | null;
          website_id: number | null;
          window_height: number | null;
          window_width: number | null;
          x: number | null;
          y: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'projects_team_id_fkey';
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
            referencedRelation: 'website';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Functions: {
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
          board_id: number | null;
          created_at: string;
          domain: string;
          hash_id: string;
          id: number;
          project_id: number | null;
        }[];
      };
      create_new_thread: {
        Args: {
          x: number;
          y: number;
          website_id: number;
          content: string;
          rect?: Json;
          window_height?: number;
          window_width?: number;
          target_selector?: string;
        };
        Returns: {
          content: string | null;
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
      delete_member: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      get_current_member_with_metadata: {
        Args: Record<PropertyKey, never>;
        Returns: {
          color: string | null;
          display_name: string | null;
          email: string | null;
          first_name: string | null;
          id: string | null;
          last_name: string | null;
          profile_picture: string | null;
          selected_team_id: number | null;
          teams: Json | null;
        }[];
      };
      get_member_with_metadata: {
        Args: {
          user_id: string;
        };
        Returns: {
          color: string | null;
          display_name: string | null;
          email: string | null;
          first_name: string | null;
          id: string | null;
          last_name: string | null;
          profile_picture: string | null;
          selected_team_id: number | null;
          teams: Json | null;
        }[];
      };
      get_members_with_metadata: {
        Args: {
          for_team_id?: number;
        };
        Returns: {
          id: string;
          first_name: string;
          last_name: string;
          selected_team_id: number;
          profile_picture: string;
          color_name: string;
          color_hex: string;
        }[];
      };
      get_threads_for_website_id: {
        Args: {
          id: number;
        };
        Returns: {
          comments: Json | null;
          content: string | null;
          created_at: string | null;
          creator: Json | null;
          creator_id: string | null;
          domain: string | null;
          id: number | null;
          rect: Json | null;
          resolved: boolean | null;
          target_selector: string | null;
          team_id: number | null;
          website_id: number | null;
          window_height: number | null;
          window_width: number | null;
          x: number | null;
          y: number | null;
        }[];
      };
      get_user_created_at: {
        Args: {
          user_id: string;
        };
        Returns: string;
      };
      hamming_distance: {
        Args: {
          x: string;
          y: string;
        };
        Returns: number;
      };
      team_users_count: {
        Args: {
          _team_id: number;
        };
        Returns: Database['public']['CompositeTypes']['team_users_summary'][];
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
      status: 'positive' | 'negative' | 'neutral';
    };
    CompositeTypes: {
      team_users_summary: {
        total_count: number | null;
        max_users: number | null;
      };
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
