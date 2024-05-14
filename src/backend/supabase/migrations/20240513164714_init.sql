CREATE OR REPLACE FUNCTION public.string_random(p_length integer DEFAULT 10, p_source text DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
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
$function$
;

create table "public"."UserData" (
    "id" uuid not null,
    "name" text,
    "email" text,
    "image" text,
    "userId" text not null default string_random()
);


alter table "public"."UserData" enable row level security;

CREATE UNIQUE INDEX "UserData_id_key" ON public."UserData" USING btree (id);

CREATE UNIQUE INDEX "UserData_pkey" ON public."UserData" USING btree (id);

CREATE UNIQUE INDEX "UserData_user_id_key" ON public."UserData" USING btree ("userId");

alter table "public"."UserData" add constraint "UserData_pkey" PRIMARY KEY using index "UserData_pkey";

alter table "public"."UserData" add constraint "UserData_id_key" UNIQUE using index "UserData_id_key";

alter table "public"."UserData" add constraint "UserData_user_id_key" UNIQUE using index "UserData_user_id_key";

alter table "public"."UserData" add constraint "public_UserData_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."UserData" validate constraint "public_UserData_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  insert into public."UserData" (id, name, email, image)
  values (new.id, new.raw_user_meta_data ->> 'name', new.email, new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$function$
;

grant delete on table "public"."UserData" to "anon";

grant insert on table "public"."UserData" to "anon";

grant references on table "public"."UserData" to "anon";

grant select on table "public"."UserData" to "anon";

grant trigger on table "public"."UserData" to "anon";

grant truncate on table "public"."UserData" to "anon";

grant update on table "public"."UserData" to "anon";

grant delete on table "public"."UserData" to "authenticated";

grant insert on table "public"."UserData" to "authenticated";

grant references on table "public"."UserData" to "authenticated";

grant select on table "public"."UserData" to "authenticated";

grant trigger on table "public"."UserData" to "authenticated";

grant truncate on table "public"."UserData" to "authenticated";

grant update on table "public"."UserData" to "authenticated";

grant delete on table "public"."UserData" to "service_role";

grant insert on table "public"."UserData" to "service_role";

grant references on table "public"."UserData" to "service_role";

grant select on table "public"."UserData" to "service_role";

grant trigger on table "public"."UserData" to "service_role";

grant truncate on table "public"."UserData" to "service_role";

grant update on table "public"."UserData" to "service_role";

create policy "Allow select for all authenticated users."
on "public"."UserData"
as permissive
for select
to public
using ((auth.role() = 'authenticated'::text));


create policy "Allow update for users themselves."
on "public"."UserData"
as permissive
for update
to public
using ((auth.uid() = id));



