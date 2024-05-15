import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './index';
import {dummyUserData} from '~/util/dummyUserData';
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
      userId: dummyUserData.userId,
      name: dummyUserData.name ?? '',
      email: dummyUserData.email ?? '',
    },
    handleSubmit: (values) => {
      action('handleSubmit')(values);
    },
  },
} satisfies Story;

export const Sending = {
  args: {
    initialValues: {
      userId: dummyUserData.userId,
      name: dummyUserData.name ?? '',
      email: dummyUserData.email ?? '',
    },
    sending: true,
    handleSubmit: (values) => {
      action('handleSubmit')(values);
    },
  },
} satisfies Story;
