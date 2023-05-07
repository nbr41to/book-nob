'use client';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

type Props = {
  id: number;
};

export const DeleteButton: FC<Props> = ({ id }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const deleteAuthor = async (id: number) => {
    setIsLoading(true);
    const response = await fetch(`http://localhost:3000/api/authors/${id}`, {
      method: 'DELETE',
    });

    setIsLoading(false);
    if (!response.ok) throw new Error('Network response was not ok');

    router.refresh();

    return response.json();
  };

  return (
    <button disabled={isLoading} onClick={() => deleteAuthor(id)}>
      削除 {isLoading && '中...'}
    </button>
  );
};

export const dynamic = true;
