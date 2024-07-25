'use client';

import React from 'react';

import {useRouter, useSelectedLayoutSegment} from 'next/navigation';

import {
  SettingsPageRoutes,
  SettingsPageRoutingData,
} from '~/frontend/features/settings/const/routing';

import {Presentation} from './presentation';

type Props = {
  children: React.ReactNode;
};

export const SettingsPageLayout: React.FC<Props> = props => {
  const {children} = props;
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const handleTabChange = (value: SettingsPageRoutes) => {
    router.replace(SettingsPageRoutingData[value].url);
  };

  if (
    !segment ||
    !(Object.values(SettingsPageRoutes) as string[]).includes(segment)
  ) {
    router.replace(SettingsPageRoutingData[SettingsPageRoutes.User].url);
  }

  return (
    <Presentation
      value={segment as SettingsPageRoutes}
      onChange={handleTabChange}
    >
      {children}
    </Presentation>
  );
};
