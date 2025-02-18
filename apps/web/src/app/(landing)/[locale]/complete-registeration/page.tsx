import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/util/supabase/server';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Provider } from '@supabase/supabase-js';
import { loginWithOAuth } from './actions';
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
