'use server';

import { createClient } from '../supabase/server';
import { validateBase64Image } from './image';

export async function uploadImage(profilePicture: string) {
  const supabase = await createClient();
  const authRes = await supabase.auth.getUser();
  const user = authRes.data.user;

  if (!user) throw new Error('No user');

  let picBucket: string | null = null;
  const imageValidationResult = await validateBase64Image(profilePicture);

  if (!imageValidationResult.valid) throw new Error(`Image invalid: ${imageValidationResult.error}`);

  const res = await supabase.storage
    .from('members_static')
    .upload(`${user.id}/${new Date().getTime()}.${imageValidationResult.info.format}`, imageValidationResult.data, {
      contentType: `image/${imageValidationResult.info.format}`,
    });
  picBucket = res.data?.fullPath ?? null;

  return picBucket;
}
