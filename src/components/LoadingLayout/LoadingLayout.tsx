import type { FC } from 'react';

type Props = {
  visible: boolean;
};

export const LoadingLayout: FC<Props> = ({ visible }) => {
  if (!visible) return <></>;

  return (
    <div className='fixed w-full h-full z-50 bg-black/30'>
      <div>spinner</div>
    </div>
  );
};
