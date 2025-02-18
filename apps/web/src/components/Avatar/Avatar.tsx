import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cva, VariantProps } from 'class-variance-authority';

const userAvatarVariants = cva('rounded-full border-2', {
  variants: {
    size: {
      default: 'size-7',
      sm: 'size-5',
      lg: 'size-9',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface Props extends VariantProps<typeof userAvatarVariants> {
  src?: string;
  color?: string | null;
  avatarProps?: ComponentPropsWithoutRef<typeof Avatar>;
  avatarImageProps?: ComponentPropsWithoutRef<typeof AvatarImage>;
}

export const UserAvatar = ({ src, color, size, ...rest }: Props) => {
  const safeColor = color ?? '#fff';
  return (
    <Avatar {...rest.avatarProps}>
      <AvatarImage
        {...rest.avatarImageProps}
        style={{ borderColor: safeColor }}
        className={cn(
          userAvatarVariants({
            size,
            className: rest.avatarImageProps?.className,
          }),
        )}
        src={src}
        alt="User profile picture"
      />
      <AvatarFallback>
        <div
          role="img"
          className={cn([
            userAvatarVariants({
              size,
              className: rest.avatarImageProps?.className,
            }),
          ])}
          style={{
            borderColor: safeColor,
            background: `linear-gradient(135deg, ${color}, #000)`,
          }}
        />
      </AvatarFallback>
    </Avatar>
  );
};
