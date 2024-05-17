import {Meta, StoryObj} from '@storybook/react';

import {UserAvatar} from "./index";
import {dummyUserData} from '~/frontend/util/dummyUserData';

const meta = {
  title: 'Common/UserAvatar',
  component: UserAvatar,
} satisfies Meta<typeof UserAvatar>;

export default meta;

type Story = StoryObj<typeof UserAvatar>;

export const Default = {
  args: {
    user: dummyUserData
  },
} satisfies Story;

export const Loading = {
  args: {},
} satisfies Story;
