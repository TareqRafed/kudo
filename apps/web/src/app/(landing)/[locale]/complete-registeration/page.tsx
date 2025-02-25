import { createClient } from '@/util/supabase/server';
import React from 'react';
import { redirect } from 'next/navigation';
import CompleteRegistertaionForm from './form';

export default async function CompleteRegistration() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data.user;
  console.log(user, 'this is user');
  if (!user) {
    redirect('/');
  }

  return <CompleteRegistertaionForm user={user} />;
}
