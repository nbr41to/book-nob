import type { Meta, StoryObj } from '@storybook/react';

import { Layout as Component } from './Layout';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'children',
  },
} satisfies Story;
