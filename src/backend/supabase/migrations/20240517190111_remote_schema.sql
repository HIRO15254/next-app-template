
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

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO ''
    AS $$
begin
  insert into public."UserData" (id, name, email, image)
  values (new.id, new.raw_user_meta_data ->> 'name', new.email, new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."string_random"("p_length" integer DEFAULT 10, "p_source" "text" DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'::"text") RETURNS "text"
    LANGUAGE "plpgsql"
    AS $$
DECLARE
    w_result text := '';
    w_index int := 0;
BEGIN
    -- 入力チェック
    IF p_length IS NULL or p_length < 1 or p_source IS NULL or p_source = '' THEN
        RETURN '';
    END IF;

    -- 文字列生成
    FOR i IN 1..p_length LOOP
        w_index := floor(random() * length(p_source))::integer + 1;
        w_result := w_result || substring(p_source, w_index, 1);
    END LOOP;
    RETURN w_result;
END;
$$;

ALTER FUNCTION "public"."string_random"("p_length" integer, "p_source" "text") OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."UserData" (
    "id" "uuid" NOT NULL,
    "name" "text",
    "email" "text",
    "image" "text",
    "userId" "text" DEFAULT "public"."string_random"() NOT NULL
);

ALTER TABLE "public"."UserData" OWNER TO "postgres";

ALTER TABLE ONLY "public"."UserData"
    ADD CONSTRAINT "UserData_id_key" UNIQUE ("id");

ALTER TABLE ONLY "public"."UserData"
    ADD CONSTRAINT "UserData_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."UserData"
    ADD CONSTRAINT "UserData_user_id_key" UNIQUE ("userId");

ALTER TABLE ONLY "public"."UserData"
    ADD CONSTRAINT "public_UserData_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;

CREATE POLICY "Allow select for all authenticated users." ON "public"."UserData" FOR SELECT USING (("auth"."role"() = 'authenticated'::"text"));

CREATE POLICY "Allow update for users themselves." ON "public"."UserData" FOR UPDATE USING (("auth"."uid"() = "id"));

ALTER TABLE "public"."UserData" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";

GRANT ALL ON FUNCTION "public"."string_random"("p_length" integer, "p_source" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."string_random"("p_length" integer, "p_source" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."string_random"("p_length" integer, "p_source" "text") TO "service_role";

GRANT ALL ON TABLE "public"."UserData" TO "anon";
GRANT ALL ON TABLE "public"."UserData" TO "authenticated";
GRANT ALL ON TABLE "public"."UserData" TO "service_role";

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
