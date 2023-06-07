"use client";

import { LoginButton } from '@/app/(other)/auth/login/_components/LoginButton';

export default function Login() {
  return (
    <LoginButton provider='google'>
      Googleでログイン
    </LoginButton>
  )
}