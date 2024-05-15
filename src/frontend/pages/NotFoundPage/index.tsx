import React from 'react';

import {Title, Text, Button, Container, Group, Anchor} from '@mantine/core';
import Link from 'next/link';

import {PUBLIC_TOP_URL} from '~/frontend/const/urls';

import classes from './index.module.css';

export const NotFoundPage = () => (
  <Container className={classes.root}>
    <div className={classes.label}>404</div>
    <Title className={classes.title}>ページが見つかりません</Title>
    <Text c="dimmed" size="lg" ta="center" className={classes.description}>
      お探しのページは、移動または削除された可能性があります。
      <br />
      メインページから再度目的のページをお探しください。
    </Text>
    <Group justify="center">
      <Anchor component={Link} href={PUBLIC_TOP_URL} underline="never">
        <Button variant="subtle" size="md">
          メインページに戻る
        </Button>
      </Anchor>
    </Group>
  </Container>
);
