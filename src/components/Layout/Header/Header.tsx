import { Button } from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

export const Header: FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className='bg-amber-500 text-white py-1 px-3 flex items-end gap-5'>
      <h1 className='text-2xl font-bold'>BOOK NOB</h1>
      <Link
        href='/books'
        className={
          currentPath === '/books' ? 'border-b-4 -mb-1 border-white' : ''
        }
      >
        本を探す
      </Link>
      <Link
        href='/authors'
        className={
          currentPath === '/authors' ? 'border-b-4 -mb-1 border-white' : ''
        }
      >
        著者で探す
      </Link>
      <Link href='/books'>マイページ</Link>
      <Link href='/books'>BOOKS</Link>
      <div className='ml-auto'>
        <Button>ログイン</Button>
      </div>
    </div>
  );
};
