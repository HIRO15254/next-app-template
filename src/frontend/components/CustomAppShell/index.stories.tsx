import {Meta, StoryObj} from '@storybook/react';
import {CustomAppShell} from "~/frontend/components/CustomAppShell/index";
import {dummyUserData} from "~/frontend/util/dummyUserData";


const meta = {
  title: 'Common/AppShell/MyAppShell',
  component: CustomAppShell,
} satisfies Meta<typeof CustomAppShell>;

export default meta;

type Story = StoryObj<typeof CustomAppShell>;

export const WithNavbar = {
  args: {
    children: 'CustomAppShell',
    userData: dummyUserData,
  },
} satisfies Story;

export const WithoutNavbar = {
  args: {
    children: 'CustomAppShell',
  },
} satisfies Story;
