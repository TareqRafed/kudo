'use client';

import { useForm } from 'react-hook-form';

import { Input } from '@kudo/ui';
import { Label } from '@kudo/ui';
import { Button } from '@kudo/ui';
import { Textarea } from '@kudo/ui';
import { useTranslations } from 'next-intl';
import { useToast } from '@kudo/ui';
import { useState } from 'react';
import { LoaderPinwheel } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: t('form.doneTitle'), // Add translation keys in your translations file
          description: t('form.doneDescription'), // Ensure these keys are defined in your JSON
        });
        reset();
      } else {
        toast({
          variant: 'destructive',
          title: t('form.errorTitle'),
          description: t('form.errorDescription'),
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('form.networkErrorTitle'),
        description: t('form.networkErrorDescription'),
      });
    }
    setIsLoading(false);
  };

  const t = useTranslations('Contact');

  return (
    <main className="h-fill mx-auto flex w-full max-w-[45rem] flex-col-reverse rounded-lg px-4 py-8 pt-5 md:w-4/5 md:flex-row lg:pt-20 xl:w-4/5">
      {/* Left half - Form */}
      <div className="flex flex-col p-5 md:w-1/2">
        <h2 className="mb-6 text-center text-3xl md:text-left md:rtl:text-right">{t('title')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col">
            <Label htmlFor="name" className="text-sm font-medium">
              {t('form.name')}
            </Label>
            <Input
              id="name"
              placeholder={t('form.placeholder.name')}
              {...register('name', { required: t('form.nameRequired') })}
              className="mt-1 rounded-lg border px-3 py-2"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email" className="text-sm font-medium">
              {t('form.email')}
            </Label>
            <Input
              id="email"
              placeholder={t('form.placeholder.email')}
              {...register('email', {
                required: t('form.emailRequired'),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('form.emailValidation'),
                },
              })}
              className="mt-1 rounded-lg border px-3 py-2"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <Label htmlFor="message" className="text-sm font-medium">
              {t('form.message')}
            </Label>
            <Textarea
              id="message"
              placeholder={t('form.messageRequired')}
              {...register('message', {
                required: t('form.messageRequired'),
              })}
              className="mt-1 rounded-lg border px-3 py-2"
            />
            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <Button type="submit" className="mt-4 w-full py-2" disabled={isLoading}>
            {isLoading ? <LoaderPinwheel className="animate-spin" strokeWidth={1.75} /> : t('form.action')}
          </Button>
        </form>
      </div>

      {/* Right half - Invitation and encouragement */}
      <div className="flex flex-col items-center p-5 md:w-1/2 md:items-start">
        <h3 className="mb-4 text-center text-xl md:text-left md:rtl:text-right">{t('subheader')}</h3>
        <p className="mb-6 text-center text-sm md:text-left md:rtl:text-right">{t('description')}</p>
        <p className="text-center text-sm text-muted-foreground md:text-left md:rtl:text-right">
          {t('action')} <br />{' '}
          <a href="mailto:info@mersal-app.com" className="text-primary">
            t@trykudo.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default Contact;
