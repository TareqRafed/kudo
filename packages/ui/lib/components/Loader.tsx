'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dotVariants: Variants = {
  initial: { y: '0%' },
  animate: {
    y: '100%',
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const loaderVariants = cva('flex transform-gpu items-center justify-center', {
  variants: {
    variant: {
      dots: 'w-full space-x-2',
      spinner: '',
    },
    size: {
      default: '',
      sm: '',
    },
  },
  compoundVariants: [
    {
      variant: 'dots',
      size: 'default',
      className: '[&>div]:size-4',
    },
    {
      variant: 'dots',
      size: 'sm',
      className: '[&>div]:size-2',
    },
    {
      variant: 'spinner',
      size: 'default',
      className: 'size-8',
    },
    {
      variant: 'spinner',
      size: 'sm',
      className: 'size-4',
    },
  ],
  defaultVariants: {
    variant: 'dots',
    size: 'default',
  },
});

interface LoaderProps extends ComponentPropsWithoutRef<typeof motion.div>, VariantProps<typeof loaderVariants> {}

export const Loader = ({ className, size, variant, ...rest }: LoaderProps) => {
  return (
    <motion.div
      // biome-ignore lint/a11y/useSemanticElements: No output element in motion
      role="status"
      aria-live="polite"
      aria-label="Loading, please wait"
      className={cn(loaderVariants({ variant, size, className }))}
      variants={variant === 'dots' ? containerVariants : undefined}
      initial={variant === 'dots' ? 'initial' : false}
      animate={variant === 'dots' ? 'animate' : false}
      {...rest}
    >
      {variant === 'dots' ? (
        [1, 2, 3].map((key) => <motion.div key={key} className="rounded-full bg-white" variants={dotVariants} />)
      ) : (
        <motion.div
          className={cn(
            'h-full w-full rounded-full border-white border-t-transparent',
            size === 'default' ? 'border-2' : 'border',
          )}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            ease: 'linear',
          }}
        />
      )}
    </motion.div>
  );
};
