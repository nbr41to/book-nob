import { CreateForm } from '@/app/authors/new/CreateForm/CreateForm';
import { prisma } from '@/prisma/client';
import { Prisma } from '@prisma/client';

/* Server Actions (beta) */
const createAuthor = async (params: Prisma.AuthorCreateInput) => {
  'use server';

  const author = await prisma.author.create({
    data: params,
  });

  console.log(author);
};

export default function NewAuthor() {
  return (
    <div>
      <h1>New Author</h1>
      <CreateForm onSubmit={createAuthor} />
    </div>
  );
}
