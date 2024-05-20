'use client';

import React from 'react';

import {Container, Tabs, Title} from '@mantine/core';

import {AppearanceSettingsForm} from '../../components/AppearanceSettingsForm';
import {AvatarSettingsForm} from '../../components/AvatarSettingsForm';
import {UserSettingsForm} from '../../components/UserSettingsForm';

interface Props {
  user: {
    name: string;
    email: string;
    image: string;
    userId: string;
    nodeId: string;
  };
}

export const SettingsPagePresentation: React.FC<Props> = props => {
  const {user} = props;
  return (
    <Container>
      <Title>設定</Title>
      <Tabs defaultValue="user" py="md">
        <Tabs.List>
          <Tabs.Tab value="user">ユーザー設定</Tabs.Tab>
          <Tabs.Tab value="avatar">アイコン設定</Tabs.Tab>
          <Tabs.Tab value="appearance">外観設定</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="user" py="md">
          <Container size="sm">
            <UserSettingsForm nodeId={user.nodeId} initialValues={user} />
          </Container>
        </Tabs.Panel>
        <Tabs.Panel value="avatar" py="md">
          <Container size="sm">
            <AvatarSettingsForm user={user} />
          </Container>
        </Tabs.Panel>
        <Tabs.Panel value="appearance" py="md">
          <Container size="sm">
            <AppearanceSettingsForm />
          </Container>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
