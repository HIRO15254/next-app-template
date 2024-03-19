import {Meta, StoryObj} from '@storybook/react';

import {Presentation} from './presentation';
import {dummySession} from '../../../.storybook/dummySession';

const meta = {
  title: 'AppShell/MyAppShell',
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof Presentation>;

export const WithNavbar = {
  args: {
    children: 'MyAppShell',
    hasNavbar: true,
  },
} satisfies Story;

export const WithoutNavbar = {
  args: {
    children: 'MyAppShell',
    hasNavbar: false,
  },
} satisfies Story;

export const WithSession = {
  args: {
    children: 'MyAppShell',
    hasNavbar: true,
    sessionData: dummySession,
  },
} satisfies Story;
