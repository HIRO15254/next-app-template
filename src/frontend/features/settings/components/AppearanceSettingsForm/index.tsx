'use client';

import {NativeSelect, Stack, useMantineColorScheme} from '@mantine/core';

export const AppearanceSettingsForm = () => {
  const {colorScheme, setColorScheme} = useMantineColorScheme();

  return (
    <Stack px="md" m="auto">
      <NativeSelect
        label="テーマ"
        description="Ctrl+Jでも切り替えることができます"
        value={colorScheme}
        data={[
          {value: 'light', label: 'ライト'},
          {value: 'dark', label: 'ダーク'},
          {value: 'auto', label: '自動'},
        ]}
        onChange={event =>
          setColorScheme(event.currentTarget.value as 'light' | 'dark' | 'auto')
        }
      />
    </Stack>
  );
};
