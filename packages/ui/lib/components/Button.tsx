import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ArrowUpRight, Check } from 'lucide-react';
import { Loader } from './Loader';

const buttonVariants = cva(
  'relative space-x-1 group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-normal transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4  [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'transform-gpu bg-primary text-primary-foreground shadow ring-offset-current transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:ring-2 hover:ring-primary hover:ring-offset-1',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent',
        link: 'underline-offset-4 hover:underline',
        externalLink: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-5 p-1 text-xs',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10  px-8',
        icon: 'size-9 text-xs',
        textIcon: 'h-9 w-16 text-xs',
        smIcon: 'size-6 p-1 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonStatus = 'ready' | 'loading' | 'success' | 'error';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  status?: ButtonStatus;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, status = 'ready', variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        aria-disabled={status !== 'ready'}
        ref={ref}
        {...props}
        disabled={status !== 'ready' || props.disabled}
      >
        <span className="flex justify-center">
          {status === 'loading' && <Loader variant={'spinner'} size={'sm'} />}
          <span className={cn('gap-2 inline-flex items-center justify-center w-full')}>
            {children}
            {variant === 'externalLink' ? (
              <ArrowUpRight className="-translate-y-1 group-hover:-translate-y-2 transition-all" />
            ) : null}
            {status === 'success' ? <Check /> : null}
          </span>
        </span>
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
