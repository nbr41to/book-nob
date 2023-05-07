'use client';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Prisma } from '@prisma/client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  onSubmit: (params: Prisma.BookUncheckedCreateInput) => Promise<void>;
};

export const CreateForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Prisma.BookUncheckedCreateInput>();
  const handleOnSubmit = async (data: Prisma.BookUncheckedCreateInput) => {
    await onSubmit({
      ...data,
      status: 'draft',
    });
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
      <Input
        label='タイトル'
        type='text'
        required
        {...register('title', { required: true })}
      />
      <Input
        label='説明'
        type='text'
        {...register('description', { required: true })}
      />
      <Input
        label='値段'
        type='number'
        required
        {...register('price', { required: true })}
      />
      <Select
        label='著者'
        options={[]}
        {...register('authorId', { required: true })}
      />
      <br />
      <button type='submit'>送信</button>
    </form>
  );
};
