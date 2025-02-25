import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Label } from '@kudo/ui';
import { Separator } from '@kudo/ui';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Options = ({ children }: { children: ReactNode }) => {
  return <div className="bg-card space-y-1 border rounded px-3 py-5">{children}</div>;
};

export const OptionSeparator = () => {
  return (
    <div className="!my-5 flex justify-center flex-col items-center">
      <Separator className="w-[94%]" />
    </div>
  );
};

interface OptionButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  label: string;
}

export const OptionLink = ({ label, ...rest }: OptionButtonProps) => {
  return (
    <Link
      className="h-full hover:bg-accent py-2 px-2 mx-auto bg-card rounded h-[3rem] hover:opacity-80 w-[98%] flex justify-between items-center"
      {...rest}
    >
      <div className="flex flex-col">
        <Label>{label}</Label>
      </div>
      <div className="max-w-[400px]">
        <ArrowRight className="size-5" />
      </div>
    </Link>
  );
};
