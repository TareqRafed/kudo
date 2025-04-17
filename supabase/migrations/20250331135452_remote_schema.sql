

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium";






CREATE SCHEMA IF NOT EXISTS "private";


ALTER SCHEMA "private" OWNER TO "postgres";


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "plv8" WITH SCHEMA "pg_catalog";






CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE TYPE "public"."status" AS ENUM (
    'positive',
    'negative',
    'neutral'
);


ALTER TYPE "public"."status" OWNER TO "postgres";


COMMENT ON TYPE "public"."status" IS 'Used for invitation where neutral is like "Pending", could be used for positive, negative or neutral';



CREATE TYPE "public"."team_users_summary" AS (
	"total_count" bigint,
	"max_users" integer
);


ALTER TYPE "public"."team_users_summary" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."compare_domains"("url1" "text", "url2" "text") RETURNS boolean
    LANGUAGE "plpgsql"
    AS $_$
DECLARE
    domain1 TEXT;
    domain2 TEXT;
BEGIN
    domain1 := regexp_replace(
        regexp_replace(url1, '^https?://(www\.)?', ''), 
        '/.*$', '' -- Removes sub-URLs
    );

    domain2 := regexp_replace(
        regexp_replace(url2, '^https?://(www\.)?', ''), 
        '/.*$', '' 
    );

    -- Normalize by keeping only the primary domain and TLD
    domain1 := reverse(split_part(reverse(domain1), '.', 2) || '.' || split_part(reverse(domain1), '.', 1));
    domain2 := reverse(split_part(reverse(domain2), '.', 2) || '.' || split_part(reverse(domain2), '.', 1));

    RETURN domain1 = domain2;
END;
$_$;


ALTER FUNCTION "private"."compare_domains"("url1" "text", "url2" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."get_random_color"() RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    random_hex TEXT;
BEGIN
    SELECT hex
    INTO random_hex
    FROM colors
    ORDER BY RANDOM()
    LIMIT 1;

    RETURN random_hex;
END;
$$;


ALTER FUNCTION "private"."get_random_color"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."get_user_email"("user_id" "uuid") RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    user_email text;
BEGIN
    SELECT email INTO user_email
    FROM auth.users
    WHERE id = user_id;

    RETURN user_email;
END;
$$;


ALTER FUNCTION "private"."get_user_email"("user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."is_admin_of"("_user_id" "uuid", "_team" bigint) RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
SELECT EXISTS (
  SELECT 1
  FROM members m
  JOIN members_teams mt ON mt.member_id = m.id
  WHERE mt.team_id = _team
  AND mt.member_id = _user_id
  AND mt.is_admin = true
);
$$;


ALTER FUNCTION "private"."is_admin_of"("_user_id" "uuid", "_team" bigint) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."is_email_member_of"("_email" character varying, "_team_id" bigint) RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
SELECT EXISTS (
  SELECT 1
  FROM auth.users u
  JOIN members_teams mt ON mt.member_id = u.id
  WHERE mt.team_id = _team_id
  AND u.email = _email
);
$$;


ALTER FUNCTION "private"."is_email_member_of"("_email" character varying, "_team_id" bigint) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."is_member_of"("_user_id" "uuid", "_team" bigint) RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
SELECT EXISTS (
  SELECT 1
  FROM members m
  JOIN members_teams mt ON mt.member_id = m.id
  WHERE mt.team_id = _team
  AND mt.member_id = _user_id
);
$$;


ALTER FUNCTION "private"."is_member_of"("_user_id" "uuid", "_team" bigint) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."is_member_website"("_user_id" "uuid", "_website_id" bigint) RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
SELECT EXISTS (
  SELECT 1
  FROM members m
  LEFT JOIN members_teams mt ON mt.member_id = m.id
  LEFT JOIN projects pr ON mt.team_id = pr.team_id
  LEFT JOIN website w ON w.project_id = pr.id
  WHERE w.id = _website_id and m.id = _user_id
);
$$;


ALTER FUNCTION "private"."is_member_website"("_user_id" "uuid", "_website_id" bigint) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "private"."users_share_teams"("_user_id_1" "uuid", "_user_id_2" "uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
SELECT EXISTS (
  SELECT 1
  FROM members_teams mt1
  JOIN members_teams mt2
  ON mt1.team_id = mt2.team_id
  WHERE mt1.member_id = _user_id_1
  AND mt2.member_id = _user_id_2
);
$$;


ALTER FUNCTION "private"."users_share_teams"("_user_id_1" "uuid", "_user_id_2" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."complete_registration_for_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    team_id BIGINT;
BEGIN
    RAISE LOG 'complete_registration_for_user_trigger: user = %', NEW.display_name;

    INSERT INTO teams (name, logo, theme) 
    VALUES (
        NEW.display_name || ' Team', 'Axe', '#F94144'
    ) 
    RETURNING id INTO team_id;
    -- user is added to team by a trigger

    UPDATE members -- newly creted user has no color
    SET color = private.get_random_color(),
        selected_team_id = team_id
    WHERE id = NEW.id;


    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."complete_registration_for_user"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."comments" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "content" "text" NOT NULL,
    "creator_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "thread_id" bigint NOT NULL
);


ALTER TABLE "public"."comments" OWNER TO "postgres";


COMMENT ON TABLE "public"."comments" IS 'Comments that belongs to threads';



CREATE OR REPLACE FUNCTION "public"."create_new_comment"("target_thread_id" integer, "target_content" "text") RETURNS SETOF "public"."comments"
    LANGUAGE "plpgsql"
    AS $$
DECLARE
    thread_id BIGINT;
BEGIN
        RETURN query
        INSERT INTO comments (
            creator_id,
            content,
            thread_id
        )
        VALUES (
            auth.uid(), 
            target_content,
            target_thread_id
        )
        RETURNING *;
END;
$$;


ALTER FUNCTION "public"."create_new_comment"("target_thread_id" integer, "target_content" "text") OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."website" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "hash_id" "text" NOT NULL,
    "domain" "text" NOT NULL,
    "board_id" bigint,
    "project_id" bigint
);


ALTER TABLE "public"."website" OWNER TO "postgres";


COMMENT ON TABLE "public"."website" IS 'Website that holds collaborated data';



CREATE OR REPLACE FUNCTION "public"."create_new_or_get_website"("hash_id" "text", "domain" "text") RETURNS SETOF "public"."website"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    existing_website website;
    new_project_id bigint;
    user_team_id bigint;
BEGIN

    SELECT selected_team_id INTO user_team_id FROM members WHERE members.id = auth.uid();
    -- Check if the website exists based on the hamming distance
    SELECT *
    INTO existing_website
    FROM website w
    LEFT JOIN projects p ON w.project_id = p.id
    WHERE p.team_id = user_team_id
    AND hamming_distance(w.hash_id, create_new_or_get_website.hash_id) <= 10
    AND private.compare_domains(p.domain, create_new_or_get_website.domain)
    LIMIT 1;

    -- If an existing website is found, return it
    IF FOUND THEN
        RETURN NEXT existing_website;
        RETURN;
    END IF;

    -- If no existing website is found, create a new project and website
    -- Create a new project for the current user
    INSERT INTO projects (team_id, domain)
    VALUES (user_team_id, create_new_or_get_website.domain)
    RETURNING id INTO new_project_id;

    -- Insert the new website with the new project_id
    INSERT INTO website (hash_id, domain, project_id)
    VALUES (create_new_or_get_website.hash_id, create_new_or_get_website.domain, new_project_id)
    RETURNING * INTO existing_website;

    -- Return the newly created website
    RETURN NEXT existing_website;
    RETURN;
END;
$$;


ALTER FUNCTION "public"."create_new_or_get_website"("hash_id" "text", "domain" "text") OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."threads" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "x" real NOT NULL,
    "y" real NOT NULL,
    "target_selector" "text",
    "creator_id" "uuid",
    "resolved" boolean NOT NULL,
    "rect" "json",
    "website_id" bigint,
    "window_height" bigint,
    "window_width" bigint,
    "content" "text"
);


ALTER TABLE "public"."threads" OWNER TO "postgres";


COMMENT ON TABLE "public"."threads" IS 'Comments of specific team';



COMMENT ON COLUMN "public"."threads"."content" IS 'Content of init comment';



CREATE OR REPLACE FUNCTION "public"."create_new_thread"("x" double precision, "y" double precision, "website_id" integer, "content" "text", "rect" "jsonb" DEFAULT NULL::"jsonb", "window_height" integer DEFAULT NULL::integer, "window_width" integer DEFAULT NULL::integer, "target_selector" "text" DEFAULT NULL::"text") RETURNS SETOF "public"."threads"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
        RETURN QUERY 
        INSERT INTO threads (
            creator_id, 
            resolved, 
            x, 
            y, 
            rect, 
            website_id, 
            "window_height", 
            "window_width", 
            target_selector,
            content
        )
        VALUES (
            auth.uid(), 
            false, 
            x, 
            y, 
            rect, 
            website_id, 
            "window_height", 
            "window_width", 
            target_selector,
            content
        )
        RETURNING *;
END;
$$;


ALTER FUNCTION "public"."create_new_thread"("x" double precision, "y" double precision, "website_id" integer, "content" "text", "rect" "jsonb", "window_height" integer, "window_width" integer, "target_selector" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."delete_member"() RETURNS boolean
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE 
    already_pending boolean;
BEGIN
    SELECT EXISTS (SELECT 1 FROM private.deleted_members WHERE user_id = auth.uid()) INTO already_pending;

    IF already_pending THEN
        RAISE EXCEPTION 'Deleting account is still pending';
    END IF;

    INSERT INTO private.deleted_members (user_id, email) 
    VALUES (auth.uid(), private.get_user_email(auth.uid()));

    RETURN true;
END;
$$;


ALTER FUNCTION "public"."delete_member"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."delete_record"("table_name" "text", "record_id" integer) RETURNS "jsonb"
    LANGUAGE "plpgsql"
    AS $$
DECLARE
    delete_query TEXT;
    result JSONB;
BEGIN
    IF record_id is null THEN
        RAISE EXCEPTION 'No record to delete';
    END IF;
    delete_query := 'DELETE FROM ' || quote_ident(table_name) || ' WHERE id = ' || record_id || ' RETURNING id';
    EXECUTE delete_query INTO result;
    IF result is null then 
        RAISE EXCEPTION 'Record doesnot exist';
    end if;
    RETURN result::JSONB;
END;
$$;


ALTER FUNCTION "public"."delete_record"("table_name" "text", "record_id" integer) OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."members_with_metadata" AS
SELECT
    NULL::"uuid" AS "id",
    NULL::bigint AS "selected_team_id",
    NULL::"text" AS "first_name",
    NULL::"text" AS "last_name",
    NULL::character varying AS "profile_picture",
    NULL::"text" AS "display_name",
    NULL::"text" AS "color",
    NULL::"text" AS "email",
    NULL::"jsonb" AS "teams";


ALTER TABLE "public"."members_with_metadata" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_current_member_with_metadata"() RETURNS SETOF "public"."members_with_metadata"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    RETURN QUERY
    SELECT * from members_with_metadata WHERE id = auth.uid();
END;
$$;


ALTER FUNCTION "public"."get_current_member_with_metadata"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_member_with_metadata"("user_id" "uuid") RETURNS SETOF "public"."members_with_metadata"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    RETURN QUERY
    SELECT * from members_with_metadata WHERE id = user_id;
END;
$$;


ALTER FUNCTION "public"."get_member_with_metadata"("user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_members_with_metadata"("for_team_id" bigint DEFAULT NULL::bigint) RETURNS TABLE("id" "uuid", "first_name" "text", "last_name" "text", "selected_team_id" bigint, "profile_picture" character varying, "color_name" "text", "color_hex" "text")
    LANGUAGE "plpgsql"
    AS $$
DECLARE
    color_count bigint;
    target_team_id bigint;
BEGIN

    IF for_team_id IS NULL THEN
        SELECT m.selected_team_id INTO target_team_id
        FROM members m
        WHERE m.id = auth.uid();
    ELSE
        target_team_id := for_team_id;
    END IF;

    SELECT COUNT(*) INTO color_count FROM colors;
    
    RETURN QUERY
     WITH numbered_users AS (
        SELECT 
            m.id AS id,
            m.first_name,
            m.last_name,
            m.selected_team_id,
            m.display_name,
            m.profile_picture,
            get_user_created_at(m.id) as created_at,
            ROW_NUMBER() OVER (ORDER BY get_user_created_at(m.id)) AS user_row
        FROM members m join members_teams mt on m.id = mt.member_id where mt.team_id = target_team_id
    )
    SELECT 
        nu.id AS id,
        nu.first_name,
        nu.last_name,
        nu.selected_team_id,
        nu.profile_picture,
        c.name AS color_name,
        c.hex AS color_hex
    FROM numbered_users nu
    JOIN LATERAL (
        SELECT name, hex
        FROM colors
        ORDER BY created_at
        LIMIT 1 OFFSET (nu.user_row - 1) % color_count
    ) c ON true;
END;
$$;


ALTER FUNCTION "public"."get_members_with_metadata"("for_team_id" bigint) OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."threads_with_metadata" AS
SELECT
    NULL::bigint AS "id",
    NULL::timestamp with time zone AS "created_at",
    NULL::real AS "x",
    NULL::real AS "y",
    NULL::"text" AS "target_selector",
    NULL::"uuid" AS "creator_id",
    NULL::boolean AS "resolved",
    NULL::"json" AS "rect",
    NULL::bigint AS "website_id",
    NULL::bigint AS "window_height",
    NULL::bigint AS "window_width",
    NULL::"text" AS "content",
    NULL::"json" AS "comments",
    NULL::"json" AS "creator",
    NULL::bigint AS "team_id",
    NULL::"text" AS "domain";


ALTER TABLE "public"."threads_with_metadata" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_threads_for_website_id"("id" integer) RETURNS SETOF "public"."threads_with_metadata"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    RETURN QUERY
    SELECT * from threads_with_metadata WHERE website_id = get_threads_for_website_id.id and resolved = false;
END;
$$;


ALTER FUNCTION "public"."get_threads_for_website_id"("id" integer) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_user_created_at"("user_id" "uuid") RETURNS timestamp with time zone
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
    RETURN (SELECT created_at FROM auth.users WHERE id = user_id);
END;
$$;


ALTER FUNCTION "public"."get_user_created_at"("user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."hamming_distance"("x" "text", "y" "text") RETURNS integer
    LANGUAGE "plv8"
    AS $$
    if(x.length != y.length)
        return 2 ^ 5
    
    const x_int = Number(x)
    const y_int = Number(y)
    
    const xorResult = x_int ^ y_int;
    const binaryString = xorResult.toString(2);
    const onesCount = (binaryString.match(/1/g) || []).length;
    
    return onesCount
$$;


ALTER FUNCTION "public"."hamming_distance"("x" "text", "y" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_invites_insert"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    max_users bigint;
    total_count bigint;
BEGIN
    SELECT team_users_count.max_users, team_users_count.total_count 
    INTO max_users, total_count 
    FROM team_users_count(new.team_id);

    IF total_count >= max_users THEN
        RAISE EXCEPTION 'You reached the max limit of % users', max_users;
    END IF;

    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."handle_invites_insert"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_team_creation"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE team_count INT;
BEGIN

    SELECT COUNT(*) INTO team_count 
    FROM teams 
    WHERE created_by = auth.uid();

    IF team_count >= 3 THEN
        RAISE EXCEPTION 'You can not ceate more than 3 teams';
    END IF;
    

    RAISE LOG 'complete_registration_for_user_trigger: team = %, user = %', NEW.id, auth.uid();
    INSERT INTO members_teams (team_id, member_id, is_admin) 
    VALUES (
        NEW.id, auth.uid(), TRUE
    );

    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."handle_team_creation"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_team_invitations_status_change"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    user_id uuid;
    user_display_name text;
BEGIN
    IF NEW.status IS DISTINCT FROM OLD.status AND OLD.status = 'neutral' AND private.get_user_email(auth.uid()) = old.email THEN
        IF NEW.status = 'positive' THEN
            INSERT INTO members_teams (team_id, is_admin)
            VALUES (NEW.team_id, false);
        END IF;
        RETURN NEW;
    END IF;
    RAISE exception 'permission denied';
END;
$$;


ALTER FUNCTION "public"."handle_team_invitations_status_change"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."insert_team_invite_notification"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
 user_id uuid;
 team_name text;
 user_display_name text;

BEGIN
    SELECT members.id into user_id from members left join auth.users on users.id = members.id where NEW.email = users.email;
    RAISE LOG 'insert_team_invite_notification: user_id = %, email = %', user_id, NEW.email;
    IF user_id IS NOT NULL THEN
         SELECT teams.name INTO team_name FROM teams WHERE NEW.team_id = teams.id;
         SELECT display_name INTO user_display_name from members WHERE members.id = NEW.user_id;
         RAISE LOG 'insert_team_invite_notification: %', user_display_name;
         INSERT INTO notifications(user_id, title, content, notifier_id, link)
         VALUES (user_id, 'Team Invitation',  user_display_name || ' invited you to join ' || team_name, NEW.user_id, '/~/settings/invitations');
    END IF;
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."insert_team_invite_notification"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."prefix_profile_picture"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
    IF NEW.profile_picture IS NOT NULL AND NOT NEW.profile_picture LIKE 'https://pfwrdyygogowjxyqcene.supabase.co/storage/v1/object/public/%' THEN
        NEW.profile_picture := 'https://' || 'pfwrdyygogowjxyqcene' || '.supabase.co/storage/v1/object/public/' || NEW.profile_picture;
    END IF;
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."prefix_profile_picture"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."team_users_count"("_team_id" bigint) RETURNS SETOF "public"."team_users_summary"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    RETURN QUERY
    SELECT 
        (SELECT COUNT(*) FROM members_teams WHERE team_id = _team_id) +
        (SELECT COUNT(*) FROM teams_invitations WHERE team_id = _team_id AND status = 'neutral') AS total_count,
        t.max_users
    FROM teams
    LEFT JOIN tiers t ON teams.tier_id = t.id
    WHERE teams.id = _team_id;
END;
$$;


ALTER FUNCTION "public"."team_users_count"("_team_id" bigint) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_record"("table_name" "text", "record_id" integer, "updates" "jsonb") RETURNS "jsonb"
    LANGUAGE "plpgsql"
    AS $$
DECLARE
    update_query TEXT := 'UPDATE ' || table_name || ' SET ';
    key TEXT;
    value TEXT;
    set_clauses TEXT := '';
    result JSONB;
BEGIN
    -- Construct the SET clauses from the JSONB data
    FOR key, value IN SELECT * FROM jsonb_each_text(updates) LOOP
        set_clauses := set_clauses || key || ' = ' || quote_literal(value) || ', ';
    END LOOP;

    -- Remove trailing comma and space
    set_clauses := rtrim(set_clauses, ', ');

    -- Raise an exception if no updates are provided
    IF set_clauses = '' THEN
        RAISE EXCEPTION 'No fields to update';
    END IF;

    -- Construct the full update query with RETURNING
    update_query := update_query || set_clauses || ' WHERE id = ' || record_id || ' RETURNING *';

    -- Execute the query and capture the result in JSONB
    EXECUTE update_query INTO result;

    -- Return the updated row as JSONB
    RETURN result::JSONB;
END;
$$;


ALTER FUNCTION "public"."update_record"("table_name" "text", "record_id" integer, "updates" "jsonb") OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "private"."deleted_members" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "email" "text" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "is_deleted" boolean DEFAULT false NOT NULL
);


ALTER TABLE "private"."deleted_members" OWNER TO "postgres";


COMMENT ON TABLE "private"."deleted_members" IS 'Deleted members pending';



ALTER TABLE "private"."deleted_members" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "private"."deleted_members_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."boards" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."boards" OWNER TO "postgres";


COMMENT ON TABLE "public"."boards" IS 'Holds shared data between users';



ALTER TABLE "public"."boards" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."boards_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."colors" (
    "name" "text" NOT NULL,
    "hex" "text" NOT NULL
);


ALTER TABLE "public"."colors" OWNER TO "postgres";


ALTER TABLE "public"."comments" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."comments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."customers" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "team_id" bigint NOT NULL,
    "customer_id" "text" NOT NULL
);


ALTER TABLE "public"."customers" OWNER TO "postgres";


COMMENT ON TABLE "public"."customers" IS 'stripe customers';



CREATE TABLE IF NOT EXISTS "public"."members" (
    "id" "uuid" NOT NULL,
    "selected_team_id" bigint,
    "first_name" "text" NOT NULL,
    "last_name" "text" NOT NULL,
    "profile_picture" character varying,
    "display_name" "text" DEFAULT 'test'::"text" NOT NULL,
    "color" "text"
);


ALTER TABLE "public"."members" OWNER TO "postgres";


COMMENT ON COLUMN "public"."members"."display_name" IS 'Display Name of User';



CREATE TABLE IF NOT EXISTS "public"."members_teams" (
    "joined_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "member_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "team_id" bigint NOT NULL,
    "is_admin" boolean DEFAULT false NOT NULL
);


ALTER TABLE "public"."members_teams" OWNER TO "postgres";


COMMENT ON TABLE "public"."members_teams" IS 'JOIN table for members and teams';



COMMENT ON COLUMN "public"."members_teams"."is_admin" IS 'Is user admin of Team';



CREATE TABLE IF NOT EXISTS "public"."teams" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" character varying NOT NULL,
    "board_id" bigint,
    "logo" "text",
    "tier_id" bigint DEFAULT '2'::bigint NOT NULL,
    "theme" "text",
    "created_by" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "customer_id" "text"
);


ALTER TABLE "public"."teams" OWNER TO "postgres";


COMMENT ON TABLE "public"."teams" IS 'User should belong to a team in order to use collaboration features';



COMMENT ON COLUMN "public"."teams"."logo" IS 'Logo of Team';



COMMENT ON COLUMN "public"."teams"."created_by" IS 'Which user created this Team';



CREATE OR REPLACE VIEW "public"."members_with_board" AS
 SELECT "members"."id",
    "members"."selected_team_id" AS "team_id",
    "teams"."board_id"
   FROM (("public"."members"
     LEFT JOIN "public"."teams" ON (("teams"."id" = "members"."selected_team_id")))
     LEFT JOIN "public"."boards" ON (("teams"."board_id" = "boards"."id")));


ALTER TABLE "public"."members_with_board" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."members_with_boards" AS
 SELECT "members"."id",
    "members"."selected_team_id" AS "team_id",
    "teams"."board_id"
   FROM (("public"."members"
     LEFT JOIN "public"."teams" ON (("teams"."id" = "members"."selected_team_id")))
     LEFT JOIN "public"."boards" ON (("teams"."board_id" = "boards"."id")));


ALTER TABLE "public"."members_with_boards" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."notifications" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "is_read" boolean DEFAULT false NOT NULL,
    "title" "text" NOT NULL,
    "content" "text" NOT NULL,
    "link" "text" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "notifier_id" "uuid"
);


ALTER TABLE "public"."notifications" OWNER TO "postgres";


COMMENT ON TABLE "public"."notifications" IS 'User notifications';



ALTER TABLE "public"."notifications" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."notifications_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."projects" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "domain" "text" NOT NULL,
    "team_id" bigint NOT NULL
);


ALTER TABLE "public"."projects" OWNER TO "postgres";


ALTER TABLE "public"."projects" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."projects_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."subscriptions" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp without time zone,
    "current_period_end" "text",
    "current_period_start" "text",
    "cancel_at_period_end" "text",
    "subscription_id" "text" NOT NULL,
    "status" "text",
    "price_id" "text" NOT NULL,
    "customer_id" "text" NOT NULL,
    "quantity" integer
);


ALTER TABLE "public"."subscriptions" OWNER TO "postgres";


COMMENT ON TABLE "public"."subscriptions" IS 'stripe subscriptions (managed by admin only)';



COMMENT ON COLUMN "public"."subscriptions"."quantity" IS 'number of seats';



ALTER TABLE "public"."teams" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."teams_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."teams_invitations" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "team_id" bigint NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "email" character varying NOT NULL,
    "status" "public"."status" DEFAULT 'neutral'::"public"."status" NOT NULL,
    "token" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."teams_invitations" OWNER TO "postgres";


COMMENT ON TABLE "public"."teams_invitations" IS 'invitations created by teams admins to join a team.';



ALTER TABLE "public"."threads" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."threads_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."tiers" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "max_users" integer NOT NULL,
    "name" character varying NOT NULL
);


ALTER TABLE "public"."tiers" OWNER TO "postgres";


COMMENT ON TABLE "public"."tiers" IS 'Available tiers where user can subscribe to';



ALTER TABLE "public"."tiers" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."tier_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."website" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."website_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE ONLY "private"."deleted_members"
    ADD CONSTRAINT "deleted_members_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."boards"
    ADD CONSTRAINT "boards_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."colors"
    ADD CONSTRAINT "colors_pkey" PRIMARY KEY ("hex");



ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."customers"
    ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id");



ALTER TABLE ONLY "public"."members"
    ADD CONSTRAINT "members_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."members_teams"
    ADD CONSTRAINT "members_teams_pkey" PRIMARY KEY ("member_id", "team_id");



ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."projects"
    ADD CONSTRAINT "projects_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subscriptions"
    ADD CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("customer_id");



ALTER TABLE ONLY "public"."teams_invitations"
    ADD CONSTRAINT "teams_invitations_pkey" PRIMARY KEY ("team_id", "email");



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."threads"
    ADD CONSTRAINT "threads_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tiers"
    ADD CONSTRAINT "tier_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."website"
    ADD CONSTRAINT "website_pkey" PRIMARY KEY ("id");



CREATE OR REPLACE VIEW "public"."members_with_metadata" WITH ("security_invoker"='true') AS
 SELECT "m"."id",
    "m"."selected_team_id",
    "m"."first_name",
    "m"."last_name",
    "m"."profile_picture",
    "m"."display_name",
    "m"."color",
    "private"."get_user_email"("m"."id") AS "email",
    COALESCE("jsonb_agg"("jsonb_build_object"('id', "t"."id", 'name', "t"."name")) FILTER (WHERE ("t"."id" IS NOT NULL)), '[]'::"jsonb") AS "teams"
   FROM (("public"."members" "m"
     LEFT JOIN "public"."members_teams" "mt" ON (("mt"."member_id" = "m"."id")))
     LEFT JOIN "public"."teams" "t" ON (("t"."id" = "mt"."team_id")))
  GROUP BY "m"."id";



CREATE OR REPLACE VIEW "public"."threads_with_metadata" WITH ("security_invoker"='true') AS
 SELECT "threads"."id",
    "threads"."created_at",
    "threads"."x",
    "threads"."y",
    "threads"."target_selector",
    "threads"."creator_id",
    "threads"."resolved",
    "threads"."rect",
    "threads"."website_id",
    "threads"."window_height",
    "threads"."window_width",
    "threads"."content",
    COALESCE("json_agg"("json_build_object"('id', "comments"."id", 'creator', "json_build_object"('id', "members"."id", 'first_name', "members"."first_name", 'last_name', "members"."last_name", 'display_name', "members"."display_name", 'color', "members"."color", 'profile_picture', "members"."profile_picture"), 'content', "comments"."content", 'created_at', "comments"."created_at")) FILTER (WHERE ("comments"."id" IS NOT NULL)), '[]'::"json") AS "comments",
    COALESCE("json_build_object"('id', "thread_members"."id", 'first_name', "thread_members"."first_name", 'last_name', "thread_members"."last_name", 'display_name', "thread_members"."display_name", 'color', "thread_members"."color", 'profile_picture', "thread_members"."profile_picture"), '{}'::"json") AS "creator",
    "projects"."team_id",
    "website"."domain"
   FROM ((((("public"."threads"
     LEFT JOIN "public"."comments" ON (("threads"."id" = "comments"."thread_id")))
     LEFT JOIN "public"."members" ON (("comments"."creator_id" = "members"."id")))
     LEFT JOIN "public"."members" "thread_members" ON (("threads"."creator_id" = "thread_members"."id")))
     LEFT JOIN "public"."website" ON (("website"."id" = "threads"."website_id")))
     LEFT JOIN "public"."projects" ON (("website"."project_id" = "projects"."id")))
  GROUP BY "website"."domain", "threads"."id", "projects"."team_id", "thread_members"."id";



CREATE OR REPLACE TRIGGER "complete_team_metadata_profile" AFTER INSERT ON "public"."members" FOR EACH ROW EXECUTE FUNCTION "public"."complete_registration_for_user"();



CREATE OR REPLACE TRIGGER "handle_invites_insert" BEFORE INSERT ON "public"."teams_invitations" FOR EACH ROW EXECUTE FUNCTION "public"."handle_invites_insert"();



CREATE OR REPLACE TRIGGER "insert_user_to_team" AFTER INSERT ON "public"."teams" FOR EACH ROW EXECUTE FUNCTION "public"."handle_team_creation"();



CREATE OR REPLACE TRIGGER "notify_member_of_team_invitation" AFTER INSERT ON "public"."teams_invitations" FOR EACH ROW EXECUTE FUNCTION "public"."insert_team_invite_notification"();



CREATE OR REPLACE TRIGGER "prefix_pp_storage_url" BEFORE INSERT OR UPDATE ON "public"."members" FOR EACH ROW EXECUTE FUNCTION "public"."prefix_profile_picture"();



CREATE OR REPLACE TRIGGER "validate_team_invitations_updates" AFTER UPDATE ON "public"."teams_invitations" FOR EACH ROW EXECUTE FUNCTION "public"."handle_team_invitations_status_change"();



ALTER TABLE ONLY "private"."deleted_members"
    ADD CONSTRAINT "deleted_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "public"."members"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "public"."threads"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."customers"
    ADD CONSTRAINT "customers_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id");



ALTER TABLE ONLY "public"."members"
    ADD CONSTRAINT "members_color_fkey" FOREIGN KEY ("color") REFERENCES "public"."colors"("hex") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."members"
    ADD CONSTRAINT "members_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."members"
    ADD CONSTRAINT "members_team_id_fkey" FOREIGN KEY ("selected_team_id") REFERENCES "public"."teams"("id") ON UPDATE CASCADE ON DELETE SET NULL;



ALTER TABLE ONLY "public"."members_teams"
    ADD CONSTRAINT "members_teams_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "public"."members"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."members_teams"
    ADD CONSTRAINT "members_teams_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_notifier_id_fkey" FOREIGN KEY ("notifier_id") REFERENCES "public"."members"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."members"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."projects"
    ADD CONSTRAINT "projects_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."subscriptions"
    ADD CONSTRAINT "subscriptions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("customer_id");



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "public"."boards"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."members"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("customer_id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."teams_invitations"
    ADD CONSTRAINT "teams_invitations_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."teams_invitations"
    ADD CONSTRAINT "teams_invitations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."members"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_tier_id_fkey" FOREIGN KEY ("tier_id") REFERENCES "public"."tiers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."threads"
    ADD CONSTRAINT "threads_creator_fkey" FOREIGN KEY ("creator_id") REFERENCES "public"."members"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."threads"
    ADD CONSTRAINT "threads_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "public"."website"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."website"
    ADD CONSTRAINT "website_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "public"."boards"("id");



ALTER TABLE ONLY "public"."website"
    ADD CONSTRAINT "website_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE;



ALTER TABLE "private"."deleted_members" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Allow admin to update teams" ON "public"."teams" FOR UPDATE TO "authenticated" USING ("private"."is_admin_of"("auth"."uid"(), "id")) WITH CHECK ("private"."is_admin_of"("auth"."uid"(), "id"));



CREATE POLICY "Allow all authenticated to see tiers" ON "public"."tiers" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Allow authenticated user to access only" ON "public"."colors" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Allow members to edit their own data" ON "public"."members" FOR UPDATE TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") = "id"));



CREATE POLICY "Allow only members to delete threads" ON "public"."threads" FOR DELETE TO "authenticated" USING ("private"."is_member_website"("auth"."uid"(), "website_id"));



CREATE POLICY "Allow user to CRUD their Team Project" ON "public"."projects" TO "authenticated" USING ("private"."is_member_of"("auth"."uid"(), "team_id")) WITH CHECK ("private"."is_member_of"("auth"."uid"(), "team_id"));



CREATE POLICY "Allow user to update except of id and website_id if website bel" ON "public"."threads" FOR UPDATE USING ("private"."is_member_website"("auth"."uid"(), "website_id")) WITH CHECK (((NOT ("id" IS DISTINCT FROM "id")) AND (NOT ("website_id" IS DISTINCT FROM "website_id"))));



CREATE POLICY "Allow users to edit their notifications" ON "public"."notifications" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "Allow users to view their created teams" ON "public"."teams" FOR SELECT TO "authenticated" USING (("created_by" = "auth"."uid"()));



CREATE POLICY "Enable authenticated user to insert comments on their team comm" ON "public"."comments" FOR INSERT TO "authenticated" WITH CHECK (("private"."is_member_website"("auth"."uid"(), ( SELECT "threads"."website_id"
   FROM "public"."threads"
  WHERE ("threads"."id" = "comments"."thread_id"))) AND ("creator_id" = "auth"."uid"())));



CREATE POLICY "Enable authenticated user to view their teams" ON "public"."teams" FOR SELECT TO "authenticated" USING ("private"."is_member_of"("auth"."uid"(), "id"));



CREATE POLICY "Enable insert for authenticated users only" ON "public"."teams" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "Enable insert if website belongs to one of user team's project" ON "public"."threads" FOR INSERT TO "authenticated" WITH CHECK ("private"."is_member_website"("auth"."uid"(), "website_id"));



CREATE POLICY "Enable update for users based on email" ON "public"."teams" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."teams_invitations"
  WHERE (("teams"."id" = "teams_invitations"."team_id") AND ((( SELECT "auth"."jwt"() AS "jwt") ->> 'email'::"text") = ("teams_invitations"."email")::"text")))));



CREATE POLICY "Enable update for users based on email" ON "public"."teams_invitations" FOR UPDATE USING (((( SELECT "auth"."jwt"() AS "jwt") ->> 'email'::"text") = ("email")::"text"));



CREATE POLICY "Enable users to insert website to their team" ON "public"."website" FOR INSERT TO "authenticated" WITH CHECK ("private"."is_member_of"("auth"."uid"(), ( SELECT "projects"."team_id"
   FROM "public"."projects"
  WHERE ("website"."project_id" = "projects"."id"))));



CREATE POLICY "Enable users to view their own data only" ON "public"."boards" FOR SELECT TO "authenticated" USING (("auth"."uid"() IN ( SELECT "m"."id"
   FROM "public"."members_with_boards" "m"
  WHERE ("m"."board_id" = "boards"."id"))));



CREATE POLICY "Enable users to view their own data only" ON "public"."threads" FOR SELECT TO "authenticated" USING ("private"."is_member_website"("auth"."uid"(), "website_id"));



CREATE POLICY "Enable users to view their own data only" ON "public"."website" FOR SELECT TO "authenticated" USING ("private"."is_member_of"("auth"."uid"(), ( SELECT "projects"."team_id"
   FROM "public"."projects"
  WHERE ("website"."project_id" = "projects"."id"))));



CREATE POLICY "Enable users to view their own team only" ON "public"."members" FOR SELECT TO "authenticated" USING (("private"."users_share_teams"("auth"."uid"(), "id") OR ("auth"."uid"() = "id")));



CREATE POLICY "Enable users to view their team comments only" ON "public"."comments" FOR SELECT TO "authenticated" USING ("private"."is_member_website"("auth"."uid"(), ( SELECT "threads"."website_id"
   FROM "public"."threads"
  WHERE ("threads"."id" = "comments"."thread_id"))));



CREATE POLICY "Members can view their team members" ON "public"."members_teams" FOR SELECT USING (("private"."is_member_of"("auth"."uid"(), "team_id") OR ("auth"."uid"() = "member_id")));



CREATE POLICY "Team Admin can delete teams invitations" ON "public"."teams_invitations" FOR DELETE TO "authenticated" USING ("private"."is_admin_of"("auth"."uid"(), "team_id"));



CREATE POLICY "Team Admin can't invite Team Members" ON "public"."teams_invitations" AS RESTRICTIVE FOR INSERT TO "authenticated" WITH CHECK (("private"."is_email_member_of"("email", "team_id") = false));



CREATE POLICY "User can complete registration by adding themselves to member t" ON "public"."members" FOR INSERT WITH CHECK (("id" = "auth"."uid"()));



CREATE POLICY "User can read their notifications only" ON "public"."notifications" FOR SELECT TO "authenticated" USING (("user_id" = "auth"."uid"()));



CREATE POLICY "User can see members who invited them" ON "public"."members" FOR SELECT TO "authenticated" USING ((EXISTS ( SELECT 1
   FROM "public"."teams_invitations"
  WHERE (("members"."id" = "teams_invitations"."user_id") AND ((( SELECT "auth"."jwt"() AS "jwt") ->> 'email'::"text") = ("teams_invitations"."email")::"text")))));



CREATE POLICY "admin can view their team invitations and user can view their i" ON "public"."teams_invitations" FOR SELECT TO "authenticated" USING (("private"."is_admin_of"("auth"."uid"(), "team_id") OR ("private"."get_user_email"("auth"."uid"()) = ("email")::"text")));



ALTER TABLE "public"."boards" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."colors" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."comments" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."customers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."members" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."members_teams" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."notifications" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "only team admins can insert" ON "public"."teams_invitations" FOR INSERT TO "authenticated" WITH CHECK (("private"."is_admin_of"("auth"."uid"(), "team_id") AND ("user_id" = "auth"."uid"())));



ALTER TABLE "public"."projects" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."subscriptions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."teams" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."teams_invitations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."threads" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tiers" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "users can delete their invitations" ON "public"."teams_invitations" FOR DELETE USING (((( SELECT "auth"."jwt"() AS "jwt") ->> 'email'::"text") = ("email")::"text"));



CREATE POLICY "users can view their invitations" ON "public"."teams_invitations" FOR SELECT TO "authenticated" USING (((( SELECT "auth"."jwt"() AS "jwt") ->> 'email'::"text") = ("email")::"text"));



ALTER TABLE "public"."website" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";






ALTER PUBLICATION "supabase_realtime" ADD TABLE ONLY "public"."boards";



ALTER PUBLICATION "supabase_realtime" ADD TABLE ONLY "public"."members";



ALTER PUBLICATION "supabase_realtime" ADD TABLE ONLY "public"."threads";



GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";




















































































































































































GRANT ALL ON FUNCTION "public"."complete_registration_for_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."complete_registration_for_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."complete_registration_for_user"() TO "service_role";



GRANT ALL ON TABLE "public"."comments" TO "anon";
GRANT ALL ON TABLE "public"."comments" TO "authenticated";
GRANT ALL ON TABLE "public"."comments" TO "service_role";



GRANT ALL ON FUNCTION "public"."create_new_comment"("target_thread_id" integer, "target_content" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."create_new_comment"("target_thread_id" integer, "target_content" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."create_new_comment"("target_thread_id" integer, "target_content" "text") TO "service_role";



GRANT ALL ON TABLE "public"."website" TO "anon";
GRANT ALL ON TABLE "public"."website" TO "authenticated";
GRANT ALL ON TABLE "public"."website" TO "service_role";



GRANT ALL ON FUNCTION "public"."create_new_or_get_website"("hash_id" "text", "domain" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."create_new_or_get_website"("hash_id" "text", "domain" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."create_new_or_get_website"("hash_id" "text", "domain" "text") TO "service_role";



GRANT ALL ON TABLE "public"."threads" TO "anon";
GRANT ALL ON TABLE "public"."threads" TO "authenticated";
GRANT ALL ON TABLE "public"."threads" TO "service_role";



GRANT ALL ON FUNCTION "public"."create_new_thread"("x" double precision, "y" double precision, "website_id" integer, "content" "text", "rect" "jsonb", "window_height" integer, "window_width" integer, "target_selector" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."create_new_thread"("x" double precision, "y" double precision, "website_id" integer, "content" "text", "rect" "jsonb", "window_height" integer, "window_width" integer, "target_selector" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."create_new_thread"("x" double precision, "y" double precision, "website_id" integer, "content" "text", "rect" "jsonb", "window_height" integer, "window_width" integer, "target_selector" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."delete_member"() TO "anon";
GRANT ALL ON FUNCTION "public"."delete_member"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."delete_member"() TO "service_role";



GRANT ALL ON FUNCTION "public"."delete_record"("table_name" "text", "record_id" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."delete_record"("table_name" "text", "record_id" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."delete_record"("table_name" "text", "record_id" integer) TO "service_role";



GRANT ALL ON TABLE "public"."members_with_metadata" TO "anon";
GRANT ALL ON TABLE "public"."members_with_metadata" TO "authenticated";
GRANT ALL ON TABLE "public"."members_with_metadata" TO "service_role";



GRANT ALL ON FUNCTION "public"."get_current_member_with_metadata"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_current_member_with_metadata"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_current_member_with_metadata"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_member_with_metadata"("user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_member_with_metadata"("user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_member_with_metadata"("user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_members_with_metadata"("for_team_id" bigint) TO "anon";
GRANT ALL ON FUNCTION "public"."get_members_with_metadata"("for_team_id" bigint) TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_members_with_metadata"("for_team_id" bigint) TO "service_role";



GRANT ALL ON TABLE "public"."threads_with_metadata" TO "anon";
GRANT ALL ON TABLE "public"."threads_with_metadata" TO "authenticated";
GRANT ALL ON TABLE "public"."threads_with_metadata" TO "service_role";



GRANT ALL ON FUNCTION "public"."get_threads_for_website_id"("id" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."get_threads_for_website_id"("id" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_threads_for_website_id"("id" integer) TO "service_role";



GRANT ALL ON FUNCTION "public"."get_user_created_at"("user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_user_created_at"("user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_user_created_at"("user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."hamming_distance"("x" "text", "y" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."hamming_distance"("x" "text", "y" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."hamming_distance"("x" "text", "y" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_invites_insert"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_invites_insert"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_invites_insert"() TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_team_creation"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_team_creation"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_team_creation"() TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_team_invitations_status_change"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_team_invitations_status_change"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_team_invitations_status_change"() TO "service_role";



GRANT ALL ON FUNCTION "public"."insert_team_invite_notification"() TO "anon";
GRANT ALL ON FUNCTION "public"."insert_team_invite_notification"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."insert_team_invite_notification"() TO "service_role";



GRANT ALL ON FUNCTION "public"."prefix_profile_picture"() TO "anon";
GRANT ALL ON FUNCTION "public"."prefix_profile_picture"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."prefix_profile_picture"() TO "service_role";



GRANT ALL ON FUNCTION "public"."team_users_count"("_team_id" bigint) TO "anon";
GRANT ALL ON FUNCTION "public"."team_users_count"("_team_id" bigint) TO "authenticated";
GRANT ALL ON FUNCTION "public"."team_users_count"("_team_id" bigint) TO "service_role";



GRANT ALL ON FUNCTION "public"."update_record"("table_name" "text", "record_id" integer, "updates" "jsonb") TO "anon";
GRANT ALL ON FUNCTION "public"."update_record"("table_name" "text", "record_id" integer, "updates" "jsonb") TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_record"("table_name" "text", "record_id" integer, "updates" "jsonb") TO "service_role";


















GRANT ALL ON TABLE "public"."boards" TO "anon";
GRANT ALL ON TABLE "public"."boards" TO "authenticated";
GRANT ALL ON TABLE "public"."boards" TO "service_role";



GRANT ALL ON SEQUENCE "public"."boards_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."boards_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."boards_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."colors" TO "anon";
GRANT ALL ON TABLE "public"."colors" TO "authenticated";
GRANT ALL ON TABLE "public"."colors" TO "service_role";



GRANT ALL ON SEQUENCE "public"."comments_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."comments_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."comments_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."customers" TO "anon";
GRANT ALL ON TABLE "public"."customers" TO "authenticated";
GRANT ALL ON TABLE "public"."customers" TO "service_role";



GRANT ALL ON TABLE "public"."members" TO "anon";
GRANT ALL ON TABLE "public"."members" TO "authenticated";
GRANT ALL ON TABLE "public"."members" TO "service_role";



GRANT ALL ON TABLE "public"."members_teams" TO "anon";
GRANT ALL ON TABLE "public"."members_teams" TO "authenticated";
GRANT ALL ON TABLE "public"."members_teams" TO "service_role";



GRANT ALL ON TABLE "public"."teams" TO "anon";
GRANT SELECT,REFERENCES,TRIGGER,TRUNCATE ON TABLE "public"."teams" TO "authenticated";
GRANT ALL ON TABLE "public"."teams" TO "service_role";



GRANT SELECT("id") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("created_at") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("name"),INSERT("name"),UPDATE("name") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("board_id") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("logo"),INSERT("logo"),UPDATE("logo") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("tier_id") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("theme"),INSERT("theme"),UPDATE("theme") ON TABLE "public"."teams" TO "authenticated";



GRANT SELECT("created_by") ON TABLE "public"."teams" TO "authenticated";



GRANT ALL ON TABLE "public"."members_with_board" TO "anon";
GRANT ALL ON TABLE "public"."members_with_board" TO "authenticated";
GRANT ALL ON TABLE "public"."members_with_board" TO "service_role";



GRANT ALL ON TABLE "public"."members_with_boards" TO "anon";
GRANT ALL ON TABLE "public"."members_with_boards" TO "authenticated";
GRANT ALL ON TABLE "public"."members_with_boards" TO "service_role";



GRANT ALL ON TABLE "public"."notifications" TO "anon";
GRANT ALL ON TABLE "public"."notifications" TO "authenticated";
GRANT ALL ON TABLE "public"."notifications" TO "service_role";



GRANT ALL ON SEQUENCE "public"."notifications_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."notifications_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."notifications_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."projects" TO "anon";
GRANT ALL ON TABLE "public"."projects" TO "authenticated";
GRANT ALL ON TABLE "public"."projects" TO "service_role";



GRANT ALL ON SEQUENCE "public"."projects_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."projects_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."projects_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."subscriptions" TO "anon";
GRANT ALL ON TABLE "public"."subscriptions" TO "authenticated";
GRANT ALL ON TABLE "public"."subscriptions" TO "service_role";



GRANT ALL ON SEQUENCE "public"."teams_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."teams_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."teams_id_seq" TO "service_role";



GRANT REFERENCES,TRIGGER,TRUNCATE ON TABLE "public"."teams_invitations" TO "anon";
GRANT SELECT,REFERENCES,DELETE,TRIGGER,TRUNCATE ON TABLE "public"."teams_invitations" TO "authenticated";
GRANT ALL ON TABLE "public"."teams_invitations" TO "service_role";



GRANT INSERT("team_id") ON TABLE "public"."teams_invitations" TO "authenticated";



GRANT INSERT("email") ON TABLE "public"."teams_invitations" TO "authenticated";



GRANT UPDATE("status") ON TABLE "public"."teams_invitations" TO "authenticated";



GRANT ALL ON SEQUENCE "public"."threads_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."threads_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."threads_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."tiers" TO "anon";
GRANT ALL ON TABLE "public"."tiers" TO "authenticated";
GRANT ALL ON TABLE "public"."tiers" TO "service_role";



GRANT ALL ON SEQUENCE "public"."tier_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."tier_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tier_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."website_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."website_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."website_id_seq" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
