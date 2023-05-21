import type { FC, ReactNode } from 'react';

import { Footer } from '@/pages/_layout/Footer';
import { Header } from '@/pages/_layout/Header';
import { useLoading } from '@/recoil/hooks/useLoading';
import { LoadingOverlay } from '@mantine/core';
import { M_PLUS_Rounded_1c } from '@next/font/google';

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  variable: '--font-rounded1c',
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const loading = useLoading();

  return (
    <div className={mPlusRounded1c.variable}>
      <Header />
      <main>{children}</main>
      <Footer />
      <LoadingOverlay visible={loading.is} />
    </div>
  );
};
