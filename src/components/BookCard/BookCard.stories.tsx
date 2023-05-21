import type { Meta, StoryObj } from '@storybook/react';

import { BookCard as Component } from './BookCard';

const meta = {
  component: Component,
  tags: ['autodocs'],
  args: {
    book: {
      id: 1,
      title: 'タイトル',
      description: '説明',
      price: 1000,
      imageSrc: 'https://placehold.jp/200x300.png',
      url: 'https://example.com',
      authorId: 1,
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;
