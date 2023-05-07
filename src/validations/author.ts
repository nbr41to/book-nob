import { checkSchemaByType } from '@/validations/checkSchemaByType';
import { Prisma } from '@prisma/client';
import z from 'zod';

export const authorUpdateSchema = checkSchemaByType<Prisma.AuthorUpdateInput>()(
  z
    .object({
      id: z.string(),
      name: z.string().min(1, {
        message: 'Name is required',
      }),
      email: z.string().email(),
    })
    .strict(),
);

export const authorCreateSchema = checkSchemaByType<Prisma.AuthorCreateInput>()(
  authorUpdateSchema.omit({ id: true }),
);
