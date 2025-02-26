'use server';

import { createResponse } from '@/util/forms/forms';
import type { FormResponse } from '@/util/forms/types';
import { createClient } from '@/util/supabase/server';
import type { Provider } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { z, type ZodType } from 'zod';

const providerSchema = z.enum(['google', 'github']) satisfies ZodType<Provider>;

export async function loginWithOAuth(_: FormResponse<typeof providerSchema> | null, formData: FormData) {
  const supabase = await createClient();
  const provider = providerSchema.safeParse(formData.get('provider')).data;
  if (!provider) redirect('/');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'http://localhost:3000/api/auth',
    },
  });

  if (error) return createResponse<typeof providerSchema>([], "Something went wrong, we couldn't register you", false);

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }

  return null;
}
