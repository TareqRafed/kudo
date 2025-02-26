'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Alert,
  AlertDescription,
} from '@kudo/ui';
import { useActionState } from 'react';
import { resetPassword } from './actions';
import { Link } from '@/i18n/routing';

export default function ResetPasswordForm() {
  const [state, formAction, isPending] = useActionState(resetPassword, null);
  return (
    <Card className="mt-[10rem] mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your E-mail, we will send you a reset password link</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {state?.message && (
            <Alert variant={state.success ? 'default' : 'destructive'}>
              <AlertDescription>{state?.message}</AlertDescription>
            </Alert>
          )}
          <form className="space-y-5" action={formAction}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <p aria-live="polite" className="text-xs text-destructive">
                {state?.email}
              </p>
              <Input name="email" id="email" type="email" placeholder="m@example.com" required />
            </div>
            <Button status={isPending ? 'loading' : 'ready'} variant={'secondary'} type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Rememberd your password?{' '}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
