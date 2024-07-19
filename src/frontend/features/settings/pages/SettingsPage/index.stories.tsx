import {Meta, StoryObj} from "@storybook/react";
import {SettingsPagePresentation} from "./presentation";
import {dummyUserData} from "~/frontend/features/auth/utils/dummyUserData";

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
    userData: dummyUserData,
  }
} satisfies Story;
