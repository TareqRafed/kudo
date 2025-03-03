import type { ComponentPropsWithoutRef } from 'react';
import { icons, colors } from './IconsColors';
import { cn } from '@/lib/utils';

interface Props extends ComponentPropsWithoutRef<'div'> {
  name?: string | null;
  theme?: string | null;
}

const IconAvatar = ({ name, theme, ...rest }: Props) => {
  const Icon = icons.find((item) => item.name === name)?.component ?? icons[0].component;

  return (
    <div
      role="img"
      aria-label={`Team Icon in the shape of ${name}`}
      style={{
        background: `linear-gradient(135deg, ${theme ?? colors[0].color}, #000)`,
        borderColor: `${theme ?? colors[0].color}`,
      }}
      className={cn('text-white size-8 flex border justify-center items-center p-1 rounded', rest.className)}
    >
      <Icon className="size-7" weight="fill" />
    </div>
  );
};

export default IconAvatar;
