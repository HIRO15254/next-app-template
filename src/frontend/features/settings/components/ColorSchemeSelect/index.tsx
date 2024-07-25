'use client';

import {useMantineColorScheme} from '@mantine/core';

import {Presentation} from './presentation';

export const ColorSchemeSelect = () => {
  const {colorScheme, setColorScheme} = useMantineColorScheme();

  return <Presentation value={colorScheme} onChange={setColorScheme} />;
};
