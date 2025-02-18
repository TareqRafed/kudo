'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { loginWithOAuth } from './actions';
import useSupabaseBrowser from '@/util/supabase/client';
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';

export default function LoginForm() {
  const supabase = useSupabaseBrowser();

  const [state, formAction] = useActionState(loginWithOAuth, null);

  return (
    <Card className="mx-auto mt-40 max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register to Kudo</CardTitle>
        <CardDescription>Enter your email below to register a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form action={formAction}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <p aria-live="polite" className="text-xs text-destructive">
                {state?.email}
              </p>
              <Input name="email" id="email" type="email" placeholder="x@example.com" required />
            </div>
            <div className="my-5 grid gap-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <Label htmlFor="password">Password</Label>
                  <p aria-live="polite" className="text-xs text-destructive">
                    {state?.password}
                  </p>
                </div>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input name="password" id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>
          <Button
            variant={'secondary'}
            className="flex w-full"
            onClick={() => {
              const formData = new FormData();
              formData.append('provider', 'github');
              formAction(formData);
            }}>
            <span className="flex space-x-5">
              Continue with Google <GoogleLogo className="ml-2" weight="thin" />
            </span>
          </Button>

          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              const formData = new FormData();
              formData.append('provider', 'github');
              formAction(formData);
            }}>
            <span className="flex space-x-5">
              Continue with Github <GithubLogo weight="thin" className="ml-2" />
            </span>
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
