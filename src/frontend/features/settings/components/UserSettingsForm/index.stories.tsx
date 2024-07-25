import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './presentation';

const meta = {
  title: 'Settings/UserSettingsForm',
  component: Presentation,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    nextjs: {
      appDirectory: true,
    },
  }
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const Default = {
  args: {
    inputProps: {
      email: {
        value: 'email',
      },
      userId: {
        value: 'userId',
      },
      name: {
        value: 'name',
      },
    }
  },
} satisfies Story;

export const Sending = {
  args: {
    inputProps: {
      email: {
        value: 'email',
      },
      userId: {
        value: 'userId',
      },
      name: {
        value: 'name',
      },
    },
    sending: true,
  },
} satisfies Story;
