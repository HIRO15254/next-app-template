"use client";

import { signOut } from 'next-auth/react';
import { Button } from '@mantine/core';

export default function Login() {
  return (
    <Button onClick={() => signOut({callbackUrl: "/auth/login"})}>
      ログアウト
    </Button>
  )
}