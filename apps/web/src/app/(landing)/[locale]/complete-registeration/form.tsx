'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState, useState } from 'react';
import React from 'react';
import { User } from '@supabase/supabase-js';
import { AvatarUploader } from '@/components/Avatar/AvatarUploader';
import { completeRegisteration } from './actions';

const CompleteRegistertaionForm = ({ user }: { user: User }) => {
  const [state, formAction] = useActionState(completeRegisteration, null);

  const providers = user.app_metadata.provider;
  const [profilePic, setProfilePic] = useState('');

  return (
    <Card className="mt-[10rem] mx-auto max-w-sm">
      {JSON.stringify(state)}
      <CardHeader>
        <CardTitle className="text-2xl">Continue Registration</CardTitle>
        <CardDescription>
          Login method is {providers} <br />
          Complete your profile to register
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form action={formAction}>
            <div className="grid gap-2 mb-5">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <Label htmlFor="profilePicture">Profile Picture</Label>
                </div>
              </div>
              <AvatarUploader id="profilePicture" onImageUpload={(img) => setProfilePic(img)} src={profilePic} />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <Label htmlFor="email">E-mail</Label>
                </div>
              </div>
              <Input name="email" id="email" value={user.email} disabled type="email" />
            </div>
            <div className="grid gap-2 my-5">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input min={2} max={20} name="firstName" id="firstName" type="text" placeholder="John" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <p aria-live="polite" className="text-xs text-destructive">
                    {state?.password}
                  </p>
                </div>
              </div>
              <Input name="lastName" id="lastName" placeholder="Doe" type="text" min={2} max={20} required />
            </div>
            <div className="grid gap-2 my-5">
              <Label htmlFor="displayName">
                Display Name<span className="text-destructive">*</span>
              </Label>
              <Input
                min={2}
                max={20}
                name="displayName"
                id="displayName"
                type="text"
                placeholder="Mystery Guest"
                required
              />
            </div>
            <Button type="submit" className="mt-5 w-full">
              Register
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompleteRegistertaionForm;
