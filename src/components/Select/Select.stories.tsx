import type { Meta, StoryObj } from '@storybook/react';

import { Select as Component } from './Select';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    options: [
      { label: 'option1', value: 'option1' },
      { label: 'option2', value: 'option2' },
      { label: 'option3', value: 'option3' },
    ],
    placeholder: '選択してください',
    value: '',
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
  args: {
    value: '',
  },
} satisfies Story;

export const WithValue: Story = {
  args: {
    value: 'option1',
  },
} satisfies Story;

export const WithLabel: Story = {
  args: {
    label: '作者',
  },
} satisfies Story;

export const WithLabelRequired: Story = {
  args: {
    label: '作者',
    required: true,
  },
} satisfies Story;

export const Error: Story = {
  args: {
    label: '作者',
    required: true,
    value: '',
    errorMessage: '作者の選択は必須です。',
  },
} satisfies Story;
