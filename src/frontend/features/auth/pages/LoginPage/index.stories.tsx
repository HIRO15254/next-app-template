import {Meta, StoryObj} from '@storybook/react';

import {LoginPage} from './index';

const meta = {
  title: 'Auth/LoginForm',
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    callbackUrl: '/',
  },
} satisfies Story;
