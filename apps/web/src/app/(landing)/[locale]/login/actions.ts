'use server';

import { createClient } from '@/util/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z, type ZodType } from 'zod';

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  password: z.string({
    invalid_type_error: 'Invalid Password',
  }),
});

type FormResponse = {
  email: string[];
  password: string[];
  message: string;
};

/**
 * This should cleaned into using createResponse utility
 */
export async function login(_: FormResponse | null, formData: FormData): Promise<FormResponse | null> {
  const supabase = await createClient();

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      ...validatedFields.error.flatten().fieldErrors,
      message: 'Some fields have issues',
    } as FormResponse;
  }

  const { error } = await supabase.auth.signInWithPassword(validatedFields.data);

  if (error) {
    return {
      email: [],
      password: ['Password is incorrect'],
      message: '',
    };
  }
  revalidatePath('/', 'layout');
  redirect('/~');
}
