import type { FC, ReactNode } from 'react';
import { Footer } from '@/components/Layout/Footer';
import { Header } from '@/components/Layout/Header';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};
