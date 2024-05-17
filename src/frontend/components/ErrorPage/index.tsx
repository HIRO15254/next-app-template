'use client';

import React from 'react';

import {Title, Text, Button, Container, Group, Anchor} from '@mantine/core';
import Link from 'next/link';

import {PUBLIC_TOP_URL} from '~/frontend/const/urls';

import classes from './index.module.css';

type Props = {
  error: Error;
  reset: () => void;
};

export const ErrorPage = (props: Props) => {
  const {error, reset} = props;
  return (
    <Container className={classes.root}>
      <div className={classes.label}>Something went wrong!</div>
      <Title className={classes.title}>{error.message}</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        ページの描画時にエラーが発生しました。
        <br />
        ページを再読み込みすることで問題が解決する場合があります。
        <br />
        それでも解決しない場合、トップページから再度目的のページにアクセスするか、管理者へご連絡ください。
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" onClick={() => reset()}>
          ページを再読み込み
        </Button>
        <Anchor component={Link} href={PUBLIC_TOP_URL} underline="never">
          <Button variant="subtle" size="md">
            メインページに戻る
          </Button>
        </Anchor>
      </Group>
    </Container>
  );
};
