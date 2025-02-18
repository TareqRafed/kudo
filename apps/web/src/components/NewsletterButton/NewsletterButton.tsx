'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LoaderPinwheel } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ComponentPropsWithoutRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type Form = {
  email: string;
};

export function NewsletterButton({ ...rest }: ComponentPropsWithoutRef<typeof Button>) {
  const { register, handleSubmit, reset } = useForm<Form>();
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations('Newsletter');

  const registerEmail = async (data: Form) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }), // Send the email from the form
      });

      if (response.ok) {
        toast({
          title: t('feedback'),
          description: t('feedbackDescription', { email: data.email }),
        });
        setIsOpen(false);
        reset();
      } else {
        toast({
          variant: 'destructive',
          title: t('internalError'),
          description: t('internalErrorDescription'),
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('networkError'),
        description: t('networkErrorDescription'),
      });
    }
    setIsLoading(false);
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button {...rest} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(registerEmail)}>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="email" className="sr-only">
                {t('label')}
              </Label>
              <Input
                type="email"
                placeholder={t('placeholder')}
                id="email"
                {...register('email', {
                  required: t('emailRequired'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t('emailValidation'),
                  },
                })}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end mt-5">
            <DialogClose asChild>
              <Button className="ml-0 lg:rtl:ml-2" type="button" variant="secondary">
                {t('close')}
              </Button>
            </DialogClose>
            <Button disabled={isLoading} className="mb-2 lg:mb-0 w-full md:w-[5.5rem]" type="submit">
              {isLoading ? <LoaderPinwheel className="animate-spin" strokeWidth={1.75} /> : t('action')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
