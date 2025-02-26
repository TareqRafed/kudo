'use client';

import { Button, Card, CardContent, CardDescription, Separator, CardHeader, CardTitle, Input, Label } from '@kudo/ui';
import { login } from './actions';
import { loginWithOAuth } from '@/actions/loginWithOAuth';
import { useActionState } from 'react';
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';

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
            <span className="flex justify-center items-center space-x-5">
              <GoogleLogo className="mr-2" weight="thin" /> Continue with Google
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
            <span className="flex justify-center items-center space-x-5">
              <GithubLogo weight="thin" className="mr-2" /> Continue with Github
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
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
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
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
