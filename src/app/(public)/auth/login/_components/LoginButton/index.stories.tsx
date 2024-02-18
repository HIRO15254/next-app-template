import {Meta, StoryObj} from '@storybook/react';

import {LoginButton} from './index';

const meta = {
  title: 'Auth/LoginButton',
  component: LoginButton,
} satisfies Meta<typeof LoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    provider: 'google',
    children: 'Googleでログイン',
  },
};
