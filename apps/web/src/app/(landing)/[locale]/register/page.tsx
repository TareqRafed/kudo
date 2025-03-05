'use client';

import {
  Alert,
  AlertDescription,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
} from '@kudo/ui';
import { useActionState } from 'react';
import React from 'react';
import { loginWithOAuth } from '@/actions/loginWithOAuth';
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';
import { register } from './actions';

export default function LoginForm() {
  const [state, action, isPending] = useActionState(register, null);
  const [_, loginWith0AuthAction] = useActionState(loginWithOAuth, null);

  return (
    <Card className="mx-auto mt-40 max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register to Kudo</CardTitle>
        <CardDescription>Enter your email below to register a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form action={action}>
            {state?.message && (
              <Alert className="mb-5">
                <AlertDescription>{state?.message}</AlertDescription>
              </Alert>
            )}
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
              </div>
              <Input name="password" id="password" type="password" required />
            </div>
            <Button status={isPending ? 'loading' : 'ready'} type="submit" className="w-full">
              Create Account
            </Button>
          </form>
          <div className="relative py-5 flex items-center w-full">
            <Separator className="flex-1" />
            <span className="px-2 uppercase text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
          <Button
            variant={'secondary'}
            className="flex w-full"
            onClick={() => {
              const formData = new FormData();
              formData.append('provider', 'google');
              loginWith0AuthAction(formData);
            }}
          >
            <span className="flex items-center justify-center">
              <GoogleLogo className="mr-2" weight="thin" /> Continue with Google
            </span>
          </Button>

          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              const formData = new FormData();
              formData.append('provider', 'github');
              loginWith0AuthAction(formData);
            }}
          >
            <span className="flex items-center justify-center">
              <GithubLogo weight="thin" className="mr-2" /> Continue with Github
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
