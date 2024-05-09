import {Meta, StoryObj} from "@storybook/react";
import {SettingsPagePresentation} from "./presentation";
import {dummySession} from "~/util/dummySession";

const meta = {
  title: 'Settings/SettingsPage',
  component: SettingsPagePresentation,
} satisfies Meta<typeof SettingsPagePresentation>;

export default meta;

type Story = StoryObj<typeof SettingsPagePresentation>;

export const Default = {
  parameters: {
    apolloClient: {
      mocks: [
      ],
    },
  },
  args: {
    initialValues: {
      userSettings: {
        userId: dummySession.user.userId,
        name: dummySession.user.name ?? '',
        email: dummySession.user.email ?? '',
      },
    },
  }
} satisfies Story;
