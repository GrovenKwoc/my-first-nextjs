'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  haterId: z.string({
    invalid_type_error: '请选择一个仇家',
  }),
  content: z.string(),
  status: z.enum(['solved', 'unsolved'], {
    invalid_type_error: '请选择目前对该事件的情绪状态',
  }),
  date: z.string(),
});

const CreateRecord = FormSchema.omit({ id: true, date: true });
const UpdateRecord = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    haterId?: string[];
    content?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createRecord(prevState: State, formData: FormData) {
  const validatedFields = CreateRecord.safeParse({
    haterId: formData.get('haterId'),
    content: formData.get('content'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Record.',
    };
  }

  const { haterId, content, status } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
    INSERT INTO record (hater_id, content, status, date)
    VALUES (${haterId}, ${content}, ${status}, ${date})
  `;
  } catch (e) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/diary/record');
  redirect('/diary/record');
}

export async function updateRecord(id: string, formData: FormData) {
  const { haterId, content, status } = UpdateRecord.parse({
    haterId: formData.get('haterId'),
    content: formData.get('content'),
    status: formData.get('status'),
  });

  try {
    await sql`
      UPDATE record
      SET hater_id = ${haterId}, content = ${content}, status = ${status}
      WHERE id = ${id}
    `;

    revalidatePath('/diary/record');
    redirect('/diary/record');
  } catch (e) {
    return {
      message: 'Database Error: Failed to Update Record.',
    };
  }
  revalidatePath('/diary/record');
  redirect('/diary/record');
}

export async function deleteRecord(id: string) {
  throw new Error('Failed to Delete Record');
  try {
    await sql`DELETE FROM record WHERE id = ${id}`;
    revalidatePath('/diary/record');
  } catch (e) {
    return { message: 'Database Error: Failed to Delete Record.' };
  }
}
