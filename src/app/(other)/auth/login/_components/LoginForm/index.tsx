"use client";

import { Paper, Stack, Title } from "@mantine/core";
import React from "react";

import { LoginButton } from "app/(other)/auth/login/_components/LoginButton";

interface Props {
  callbackUrl?: string;
}

const LoginForm = (props: Props) => {
  const { callbackUrl } = props;
  return (
    <Paper unstyled pb="sm" m="auto" style={{ maxWidth: '480px' }}>
      <Title order={2} pt="sm">
        ログイン
      </Title>
      <Stack mt="md">
        <LoginButton provider="google" callback={callbackUrl?.toString()}>
          Googleでログイン
        </LoginButton>
      </Stack>
    </Paper>
  );
};

export default LoginForm;