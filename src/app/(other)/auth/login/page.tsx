"use client";

import { LoginButton } from '@/app/(other)/auth/login/_components/LoginButton';
import { useSession } from 'next-auth/react';

export default function Login() {
  return (
    <LoginButton provider='google' callback='/'>
      Googleでログイン
    </LoginButton>
  )
}