import React from 'react';

import {NativeSelect} from '@mantine/core';

import type {MantineColorScheme, NativeSelectProps} from '@mantine/core';

interface Props extends Omit<NativeSelectProps, 'value' | 'onChange'> {
  value: MantineColorScheme;
  onChange: (colorScheme: MantineColorScheme) => void;
}

/**
 * テーマ選択フォームの見た目
 * @package
 */
export const Presentation: React.FC<Props> = props => {
  const {value, onChange, ...rest} = props;

  const data: {value: MantineColorScheme; label: string}[] = [
    {value: 'light', label: 'ライト'},
    {value: 'dark', label: 'ダーク'},
    {value: 'auto', label: '自動'},
  ];

  return (
    <NativeSelect
      label="テーマ"
      description="Ctrl+Jでも切り替えることができます"
      value={value}
      data={data}
      onChange={event =>
        onChange(event.currentTarget.value as MantineColorScheme)
      }
      {...rest}
    />
  );
};
