import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './index';
import {dummySession} from '~/util/dummySession';
import {action} from "@storybook/addon-actions";

const meta = {
  title: 'Settings/UserSettingsForm',
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const Default = {
  args: {
    initialValues: {
      userId: dummySession.user.userId,
      name: dummySession.user.name ?? '',
      email: dummySession.user.email ?? '',
    },
    handleSubmit: (values) => {
      action('handleSubmit')(values);
    },
  },
} satisfies Story;
