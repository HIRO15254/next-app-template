import {Meta, StoryObj} from "@storybook/react";
import {SettingsPagePresentation} from "./presentation";
import {dummyUserData} from "~/util/dummyUserData";

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
        userId: dummyUserData.userId,
        name: dummyUserData.name ?? '',
        email: dummyUserData.email ?? '',
      },
    },
  }
} satisfies Story;
