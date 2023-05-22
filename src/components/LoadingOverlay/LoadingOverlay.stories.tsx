import type { Meta, StoryObj } from '@storybook/react';

import { LoadingOverlay as Component } from './LoadingOverlay';

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
