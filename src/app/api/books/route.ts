import { prisma } from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const authors = await prisma.book.findMany();

  return NextResponse.json(authors);
}

export async function POST(request: Request) {
  const body = await request.json(); // request.body

  const author = await prisma.book.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(author);
}
