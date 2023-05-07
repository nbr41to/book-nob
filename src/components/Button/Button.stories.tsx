import type { Meta, StoryObj } from '@storybook/react';

import { Button as Component } from './Button';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
} satisfies Story;

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
} satisfies Story;
