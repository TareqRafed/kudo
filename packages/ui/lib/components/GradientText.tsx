import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
  as?: React.ElementType;
}

export const GradientText = ({
  children,
  from = 'from-foreground/60',
  to = 'to-foreground',
  className = '',
  as: Component = 'span',
}: GradientTextProps) => {
  return (
    <Component className={`bg-gradient-to-r ${from} ${to} inline-block text-transparent bg-clip-text ${className}`}>
      {children}
    </Component>
  );
};
