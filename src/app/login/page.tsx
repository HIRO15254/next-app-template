"use client";

import { createClient } from '@supabase/supabase-js'
import { LoginButton } from '@/app/login/_components/LoginButton';

export default function Login() {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  )

  return (
    <LoginButton provider='google'>
      Googleでログイン
    </LoginButton>
  )
}