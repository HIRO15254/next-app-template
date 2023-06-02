'use client';

import { Anchor, createStyles, Header, Text, Title } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    zIndex: 1,
  },
}));

export const Test = () => {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>
      <Title>This is a Main Page</Title>
      <Anchor href="/login">Login Page</Anchor>
    </div>
  );
}
