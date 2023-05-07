'use client';
import { Input } from '@/components/Input';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

type Props = {};

export const CreateForm: FC<Props> = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await fetch('/api/authors', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
      }),
    });

    setIsLoading(false);
    setName('');
    setEmail('');
    router.refresh();
  };

  return (
    <div>
      <Input
        label='名前'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label='メールアドレス'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button disabled={isLoading} onClick={handleSubmit}>
        送信{isLoading && '中...'}
      </button>
    </div>
  );
};
