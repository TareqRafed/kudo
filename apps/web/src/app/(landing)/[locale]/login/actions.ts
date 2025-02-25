'use server';

import { createClient } from '@/util/supabase/server';
import type { Provider } from '@supabase/supabase-js';
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

export type FormValues = {
  email: string;
  password: string;
};

export type FormResponse = {
  email: string[];
  password: string[];
  message: string;
};

export async function login(prevState: FormResponse, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      ...validatedFields.error.flatten().fieldErrors,
      message: 'Some fields have issues',
    };
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
