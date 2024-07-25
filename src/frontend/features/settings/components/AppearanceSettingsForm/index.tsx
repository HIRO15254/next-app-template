import React from 'react';

import {Stack} from '@mantine/core';

import {ColorSchemeSelect} from '../ColorSchemeSelect';

interface Props {}

export const AppearanceSettingForm: React.FC<Props> = () => (
  <Stack px="md" m="auto">
    <ColorSchemeSelect />
  </Stack>
);
