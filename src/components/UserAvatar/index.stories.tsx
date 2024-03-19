import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './presentation';
import {dummySession} from '../../../.storybook/dummySession';

const meta = {
  title: 'UserAvatar',
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const Default = {
  args: {
    user: dummySession.user,
  },
} satisfies Story;

export const Loading = {
  args: {},
} satisfies Story;
