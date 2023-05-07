import { prisma } from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const bookId = params.id;
  const body = await request.json(); // request.body

  const book = await prisma.book.update({
    where: {
      id: parseInt(bookId, 10),
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(book);
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const bookId = params.id;

  const book = await prisma.book.delete({
    where: {
      id: parseInt(bookId, 10),
    },
  });

  return NextResponse.json(book);
}
