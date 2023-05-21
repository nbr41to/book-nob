import type { Meta, StoryObj } from '@storybook/react';

import { Footer as Component } from './Footer';

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
