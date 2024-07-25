'use client';

import React from 'react';

import {Container, Tabs, Title} from '@mantine/core';

import {
  SettingsPageRoutes,
  SettingsPageRoutingData,
} from '~/frontend/features/settings/const/routing';

interface Props {
  value: SettingsPageRoutes;
  onChange: (value: SettingsPageRoutes) => void;
  children: React.ReactNode;
}

export const Presentation: React.FC<Props> = props => {
  const {value, onChange, children} = props;
  return (
    <Container>
      <Title>設定</Title>
      <Tabs value={value} onChange={val => onChange(val as SettingsPageRoutes)}>
        <Tabs.List>
          {Object.entries(SettingsPageRoutingData).map(([val, {label}]) => (
            <Tabs.Tab key={val} value={val}>
              {label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Container size="sm" py="md">
          {children}
        </Container>
      </Tabs>
    </Container>
  );
};
