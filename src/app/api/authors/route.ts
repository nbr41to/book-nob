import { prisma } from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const authors = await prisma.author.findMany();

  return NextResponse.json(authors);
}

export async function POST(request: Request) {
  const body = await request.json(); // request.body
  console.log(body);

  const author = await prisma.author.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(author);
}
