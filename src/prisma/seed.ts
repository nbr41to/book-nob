import { Author, Book } from '@prisma/client';
import { prisma } from './client';

const createSeed = async () => {
  await prisma.author.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'example1@example.com',
      },
      {
        name: 'Steve Nobs',
        email: 'example2@example.com',
      },
      {
        name: 'Nob Gates',
        email: 'example3@example.com',
      },
    ] as Author[],
  });

  await prisma.book.createMany({
    data: [
      {
        title: 'Book 1',
        authorId: 1,
        price: 100,
      },
    ] as Book[],
  });
};

createSeed();
