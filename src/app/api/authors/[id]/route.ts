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
  const authorId = params.id;
  const body = await request.json(); // request.body

  const author = await prisma.author.update({
    where: {
      id: parseInt(authorId, 10),
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(author);
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const authorId = params.id;
  console.log(authorId);

  const author = await prisma.author.delete({
    where: {
      id: parseInt(authorId, 10),
    },
  });

  return NextResponse.json(author);
}
