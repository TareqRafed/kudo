'use server';

import { env } from '@/lib/env';
import { createResponse, validateFormData } from '@/util/forms/forms';
import type { FormResponse } from '@/util/forms/types';
import { createClient } from '@/util/supabase/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  password: z.string({
    invalid_type_error: 'Invalid Password',
  }),
});

export async function register(
  _: FormResponse<typeof schema> | null,
  formData: FormData,
): Promise<FormResponse<typeof schema> | null> {
  const supabase = await createClient();
  const data = validateFormData(formData, schema);
  if (!data.success) return data;

  const { error, data: auth } = await supabase.auth.signUp({
    ...data,
    options: {
      emailRedirectTo: `${env.NEXT_PUBLIC_BASE_URL}/api/auth`,
    },
  });
  if (error) return createResponse([], error.message, false);

  if (auth.user) return createResponse([], 'Check your E-mail for the next steps', true);

  return null;
}
