import {Meta, StoryObj} from '@storybook/react';

import {UserSettingsFormPresentation} from './presentation';
import {action} from "@storybook/addon-actions";

const meta = {
  title: 'Settings/UserSettingsForm',
  component: UserSettingsFormPresentation,
} satisfies Meta<typeof UserSettingsFormPresentation>;

export default meta;

type Story = StoryObj<typeof UserSettingsFormPresentation>;

export const Default = {
  args: {
    onSubmit: () => {
      action('handleSubmit')
    },
  },
} satisfies Story;

export const Sending = {
  args: {
    sending: true,
    onSubmit: () => {
      action('handleSubmit')
    },
  },
} satisfies Story;
