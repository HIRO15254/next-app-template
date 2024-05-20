import {AvatarSettingsForm} from "~/frontend/features/settings/components/AvatarSettingsForm/index";
import {Meta, StoryObj} from "@storybook/react";
import {dummyUserData} from "~/frontend/util/dummyUserData";

const meta = {
  title: "Settings/AvatarSettingsForm",
  component: AvatarSettingsForm
} satisfies Meta<typeof AvatarSettingsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    user: {
      userId: dummyUserData.userId,
      name: dummyUserData.name ?? "",
      nodeId: dummyUserData.nodeId,
      image: dummyUserData.image ?? "",
    },
  },
} satisfies Story;
