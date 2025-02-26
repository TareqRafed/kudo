'use server';

import { createResponse, validateFormData } from '@/util/forms/forms';
import type { FormResponse } from '@/util/forms/types';
import { createClient } from '@/util/supabase/server';
import { z } from 'zod';

const schema = z.object({
  email: z
    .string({
      invalid_type_error: 'Invalid Email',
    })
    .email(),
});

export async function resetPassword(
  _: FormResponse<typeof schema> | null,
  formData: FormData,
): Promise<FormResponse<typeof schema> | null> {
  const supabase = await createClient();
  const data = validateFormData(formData, schema);
  if (!data.success) return data;

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: 'https://localhost:3000/update-password',
  });

  if (error) return createResponse([], error.message, false);

  return createResponse([], 'Reset password link has been sent', true);
}
