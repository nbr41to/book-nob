import { Book } from '@/types';
import { clsx } from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  book: Book;
};

export const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className={clsx(['w-full py-4 text-center text-sm'])}>
      <Image src={book.imageSrc} alt={book.title} width={200} height={300} />
      <h3>タイトル</h3>
      <p>price</p>
    </div>
  );
};
