'use client';

import { Anchor, Title, Text } from '@mantine/core';

export const Test = () => {
  return (
    <div>
      <Title>This is a Main Page</Title>
      <Anchor href="/auth/login">Login Page</Anchor>
    </div>
  );
}
