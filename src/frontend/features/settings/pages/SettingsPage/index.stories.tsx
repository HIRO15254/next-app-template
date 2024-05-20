import {Meta, StoryObj} from "@storybook/react";
import {SettingsPagePresentation} from "./presentation";
import {dummyUserData} from "~/frontend/util/dummyUserData";

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
    user: {
      name: dummyUserData.name ?? '',
      email: dummyUserData.email ?? '',
      image: dummyUserData.image ?? '',
      userId: dummyUserData.userId,
      nodeId: dummyUserData.nodeId,
    }
  }
} satisfies Story;
