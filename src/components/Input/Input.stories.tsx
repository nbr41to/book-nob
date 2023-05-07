import type { Meta, StoryObj } from '@storybook/react';

import { Input as Component } from './Input';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    placeholder: 'example@example.com',
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

export const Default: Story = {
  args: {},
} satisfies Story;

export const WithValue: Story = {
  args: {
    value: 'test@example.com',
  },
} satisfies Story;

export const WithLabel: Story = {
  args: {
    label: 'メールアドレス',
  },
} satisfies Story;

export const WithLabelRequired: Story = {
  args: {
    label: 'メールアドレス',
    required: true,
  },
} satisfies Story;

export const Error: Story = {
  args: {
    label: 'メールアドレス',
    required: true,
    value: 'test-example-com',
    errorMessage: 'メールアドレスが正しくありません。',
  },
} satisfies Story;
