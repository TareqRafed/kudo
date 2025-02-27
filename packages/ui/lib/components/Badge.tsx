import type { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-thin transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'items-center justify-center bg-background [&>span]:bg-gradient-to-r [&>span]:from-primary [&>span]:to-accent [&>span]:bg-clip-text [&>span]:text-transparent',
        basic: 'border-transparent bg-accent text-accent-foreground hover:bg-accent/80',
        premium:
          'items-center justify-center bg-background [&>span]:bg-gradient-to-r [&>span]:from-primary [&>span]:to-accent [&>span]:bg-clip-text [&>span]:text-transparent',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <span>{children}</span>
    </div>
  );
}

export { Badge, badgeVariants };
