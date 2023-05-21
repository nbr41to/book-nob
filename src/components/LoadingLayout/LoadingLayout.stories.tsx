import type { Meta, StoryObj } from '@storybook/react';

import { LoadingLayout as Component } from './LoadingLayout';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    visible: true,
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;
