'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login, loginWithOAuth } from './actions';
import { useActionState } from 'react';
import { Separator } from '@/components/ui/separator';
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react';

export default function LoginForm() {
  const [state, formAction] = useActionState(login, null);
  const [socialState, socialAction] = useActionState(loginWithOAuth, null);
  return (
    <Card className="mt-[10rem] mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Continue with the following providers or using your e-mail and password</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <Button
            className="w-full flex"
            onClick={() => {
              const formData = new FormData();
              formData.append('provider', 'github');
              socialAction(formData);
            }}
          >
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
              socialAction(formData);
            }}
          >
            <span className="flex space-x-5">
              Continue with Github <GithubLogo weight="thin" className="ml-2" />
            </span>
          </Button>
        </div>
        <div className="relative py-5">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>

        <div className="grid gap-4">
          {socialState?.message ?? ''}
          <form action={formAction}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <p aria-live="polite" className="text-xs text-destructive">
                {state?.email}
              </p>
              <Input name="email" id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2 my-5">
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
            <Button variant={'secondary'} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/en/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
