import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './presentation';

const meta = {
  title: 'Auth/LoginButton',
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const Google: Story = {
  args: {
    provider: 'google',
    children: 'Googleでログイン',
  },
} satisfies Story;
