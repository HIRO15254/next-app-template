'use client';

import { Anchor, Title, Text } from '@mantine/core';
import { useAuth } from '../Providers/Auth';

export const Test = () => {
  const auth = useAuth();

  return (
    <div>
      <Text>
        {auth?.email || "Not Logged In"}
      </Text>
      <Title>This is a Main Page</Title>
      <Anchor href="/auth/login">Login Page</Anchor>
    </div>
  );
}
