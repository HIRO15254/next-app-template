import {Meta, StoryObj} from "@storybook/react";
import {Presentation} from "./presentation";

const meta = {
  title: 'Settings/ColorSchemeSelect',
  component: Presentation,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    }
  }
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const Default = {
  args: {
    value: 'light',
  },
} satisfies Story;
