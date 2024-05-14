import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './presentation';
import {dummySession} from '~/util/dummySession';

const meta = {
  title: 'Common/AppShell/MyAppShell',
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const WithNavbar = {
  args: {
    children: 'MyAppShell',
  },
} satisfies Story;

export const WithoutNavbar = {
  args: {
    children: 'MyAppShell',
  },
} satisfies Story;

export const WithSession = {
  args: {
    children: 'MyAppShell',
  },
} satisfies Story;
