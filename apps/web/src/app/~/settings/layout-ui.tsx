import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  description?: string;
}

export const Header = ({ children, title, description, ...rest }: HeaderProps) => {
  return (
    <Container className="flex items-end justify-between">
      <div>
        <h1 className="text-3xl">{title}</h1>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
      <div>{children}</div>
    </Container>
  );
};

interface SubheaderProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  description?: string;
}

export const Subheader = ({ title, description, className, ...rest }: SubheaderProps) => {
  return (
    <>
      <div className={cn(['mt-5 p-2 mb-2', className])} {...rest}>
        <h2 className="text-xl">{title}</h2>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </>
  );
};

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return <div className={cn(['w-[100%] md:w-[70%] lg:w-[40%] mx-auto my-10', rest.className])}>{children}</div>;
};
