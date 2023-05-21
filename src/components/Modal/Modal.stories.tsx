import type { Meta, StoryObj } from '@storybook/react';

import { Modal as Component } from '.';

const meta = {
  title: 'Components/Modal',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: <div>Modal</div>,
  },
} satisfies Story;
