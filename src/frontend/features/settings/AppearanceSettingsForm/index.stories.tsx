import {Meta, StoryObj} from "@storybook/react";
import {AppearanceSettingsForm} from "~/frontend/features/settings/AppearanceSettingsForm/index";

const meta = {
  title: 'Settings/AppearanceSettingsForm',
  component: AppearanceSettingsForm,
} satisfies Meta<typeof AppearanceSettingsForm>;

export default meta;

type Story = StoryObj<typeof AppearanceSettingsForm>;

export const Default = {} satisfies Story;
