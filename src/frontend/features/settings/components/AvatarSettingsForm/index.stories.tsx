import {AvatarSettingsForm} from "~/frontend/features/settings/components/AvatarSettingsForm/index";
import {Meta, StoryObj} from "@storybook/react";
import {dummyUserData} from "~/frontend/features/auth/utils/dummyUserData";

const meta = {
  title: "Settings/AvatarSettingsForm",
  component: AvatarSettingsForm,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    nextjs: {
      appDirectory: true,
    },
  }
} satisfies Meta<typeof AvatarSettingsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    userData: dummyUserData
  },
} satisfies Story;
