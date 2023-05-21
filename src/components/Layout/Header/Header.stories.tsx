import type { Meta, StoryObj } from '@storybook/react';

import { Header as Component } from './Header';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;
