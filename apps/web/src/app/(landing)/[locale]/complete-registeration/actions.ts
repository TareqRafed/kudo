'use server';

import { createResponse, validateFormData } from '@/util/forms/forms';
import type { FormResponse } from '@/util/forms/types';
import { validateBase64Image } from '@/util/images/image';
import { createClient } from '@/util/supabase/server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  profilePicture: z.string().optional(),
});

export async function completeRegisteration(
  _: FormResponse<typeof schema> | null,
  formData: FormData,
): Promise<FormResponse<typeof schema> | null> {
  const supabase = await createClient();
  const authRes = await supabase.auth.getUser();
  const user = authRes.data.user;

  if (!user) return createResponse([], 'User not found', false);

  const data = validateFormData(formData, schema);

  if (!data.success) return data;

  let picBucket: string | null = null;
  if (data.profilePicture) {
    const imageValidationResult = await validateBase64Image(data.profilePicture);

    if (!imageValidationResult.valid)
      return createResponse<typeof schema>(
        [{ field: 'profilePicture', messages: ['Image is invalid'] }],
        'Some issues in the form',
        false,
      );

    const res = await supabase.storage
      .from('members_static')
      .upload(
        `profile_pictures/${user.email}/${new Date().toString()}.${imageValidationResult.info.format}`,
        data.profilePicture,
      );
    picBucket = res.data?.fullPath ?? null;
  }

  const { error } = await supabase
    .from('members')
    .insert({
      id: user.id,
      first_name: data.firstName,
      last_name: data.lastName,
      profile_picture: picBucket,
      display_name: data.displayName,
    })
    .returns()
    .maybeSingle();

  if (error) {
    return createResponse([], error.message, false);
  }

  redirect('/~');
}
