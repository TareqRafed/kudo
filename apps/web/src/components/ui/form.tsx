'use client';

import { ComponentPropsWithoutRef, useId } from 'react';
import { Separator } from './separator';
import { Label } from './label';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  FormProvider,
  FormState,
  Path,
  PathValue,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useFormContext,
  UseFormStateReturn,
} from 'react-hook-form';
import * as z from 'zod';
import { Slot } from '@radix-ui/react-slot';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Skeleton } from './skeleton';
import { cva, VariantProps } from 'class-variance-authority';

const isDirty = <T extends FieldValues>(fields: FormState<T>['dirtyFields']) => Object.values(fields).some((v) => v);

interface FormProps<T extends z.ZodType> extends ComponentPropsWithoutRef<'form'> {
  schema: T;
  onValidSubmit: SubmitHandler<z.infer<T>>;
  onInvalidSubmit?: SubmitErrorHandler<z.infer<T>>;
  defaultValues?: z.infer<T>;
}

export const Form = <T extends z.ZodType>({
  children,
  schema,
  onValidSubmit,
  onInvalidSubmit,
  defaultValues,
  ...rest
}: FormProps<T>) => {
  const ctx = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...ctx}>
      <form
        {...rest}
        onSubmit={ctx.handleSubmit((d, e) => {
          onValidSubmit(d, e);
          ctx.reset();
        }, onInvalidSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

interface FormRowProps<TFieldValues extends FieldValues> extends React.ComponentPropsWithoutRef<'label'> {
  render?: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
  name: FieldPath<TFieldValues>;
  label: string;
  hint?: string | null;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
  /**
   * Replaces children with skeletion
   */
  isLoading?: boolean;
}

export const FormRow = <TFieldValues extends FieldValues>({
  label,
  render,
  defaultValue,
  name,
  hint,
  children,
  isLoading,
  ...rest
}: FormRowProps<TFieldValues>) => {
  const id = useId();
  const ctx = useFormContext<TFieldValues>();

  const { register, control, formState } = ctx || {
    register: null,
    control: null,
    formState: null,
  };
  const error = formState?.errors?.[name];

  const props = {
    ...(render ? { control, name } : { ...register?.(name) }),
    id,
  };
  return (
    <div className="my-2 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 flex-col">
          <Label className={cn(error?.message && 'text-destructive')} htmlFor={id} {...rest}>
            {label}
          </Label>
          {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
          {error?.message && <p className="mt-1 text-xs font-bold text-destructive">{error?.message?.toString()}</p>}
        </div>
        {isLoading ? <Skeleton className="h-8 w-full max-w-[400px]" /> : null}
        {!isLoading && (
          <Slot {...props} className="!max-w-[400px] flex-1">
            {render ? (
              <Controller name={name} defaultValue={defaultValue} control={control} render={render} />
            ) : (
              children
            )}
          </Slot>
        )}
      </div>
    </div>
  );
};

interface FormSeparatorProps extends ComponentPropsWithoutRef<'div'> {}
export const FormSeparator = ({ ...rest }: FormSeparatorProps) => {
  return (
    <div className="my-5 flex flex-col items-center justify-center" {...rest}>
      <Separator className="w-[90%]" />
    </div>
  );
};

const formGroupVariants = cva('rounded border p-5', {
  variants: {
    variant: {
      default: 'bg-card',
      destructive: 'border-destructive bg-card',
      ghost: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface FormGroupProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof formGroupVariants> {}
export const FormGroup = ({ children, variant, className, ...rest }: FormGroupProps) => {
  return (
    <div className={cn(formGroupVariants({ variant, className }))} {...rest}>
      {children}
    </div>
  );
};

interface FormFooterProps extends ComponentPropsWithoutRef<'div'> {}
export const FormFooter = ({ children, ...rest }: FormFooterProps) => {
  return (
    <div className="mt-5 flex justify-end space-x-2" {...rest}>
      {children}
    </div>
  );
};

interface FormSubmitProps extends ComponentPropsWithoutRef<typeof Button> {}
export const FormSubmit = ({ children, ...rest }: FormSubmitProps) => {
  const { formState } = useFormContext();

  const dirty = isDirty(formState.dirtyFields);
  return (
    <Button
      status={formState.isSubmitting ? 'loading' : rest.status}
      disabled={!dirty || rest.disabled}
      type="submit"
      size={'sm'}
      {...rest}
    >
      {children}
    </Button>
  );
};

interface FormCancelProps extends ComponentPropsWithoutRef<typeof Button> {}
export const FormCancel = ({ children, ...rest }: FormCancelProps) => {
  const { formState, reset } = useFormContext();

  const dirty = isDirty(formState.dirtyFields);
  return (
    <Button
      onClick={() => reset()}
      disabled={formState.isSubmitting || !dirty || rest.disabled}
      type="button"
      variant={'secondary'}
      size={'sm'}
      {...rest}
    >
      {children}
    </Button>
  );
};
