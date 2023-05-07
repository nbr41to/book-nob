import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';

type Props = JSX.IntrinsicElements['button'] & {
  children: string | ReactNode;
  variant?: 'primary' | 'secondary';
};

export const Button: FC<Props> = ({
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      className={clsx([
        'w-full py-4 text-center text-sm',
        variant === 'primary' && 'bg-brawn text-white disabled:bg-brawn',
        variant === 'secondary' && 'border border-brawn bg-white text-brawn',
      ])}
      {...rest}
    >
      {children}
    </button>
  );
};
