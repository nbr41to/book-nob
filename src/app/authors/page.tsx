import { AuthorTable } from '@/app/authors/AuthorTable';
import { CreateForm } from '@/app/authors/CreateForm';
import { Input } from '@/components/Input';
import { Suspense } from 'react';

export default function Authors() {
  return (
    <div>
      <h1>Books Page</h1>
      <div>
        <Input label='検索' />
      </div>
      <CreateForm />

      <Suspense fallback={<div>Books is loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AuthorTable />
      </Suspense>
    </div>
  );
}
