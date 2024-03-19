import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './presentation';

const meta = {
  title: 'Auth/LoginForm',
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const Default: Story = {
  args: {
    callbackUrl: '/',
  },
} satisfies Story;
