'use client';
import { Input } from '@/components/Input';
import { Prisma } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

type Props = {
  onSubmit: (params: Prisma.AuthorCreateInput) => Promise<void>;
};

export const CreateForm: FC<Props> = ({ onSubmit }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    await onSubmit({
      name,
      email,
    });
    router.refresh();
    router.push('/authors');
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
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};
