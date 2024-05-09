import {Meta, StoryObj} from '@storybook/react';

import {LoginForm} from './index';

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    callbackUrl: '/',
  },
} satisfies Story;
