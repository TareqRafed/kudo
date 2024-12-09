import { Avatar, AvatarFallback, AvatarImage, cn } from '@extension/ui';

interface Props {
  color: string;
  className?: string;
}

export const UserAvatar = ({ color, className }: Props) => {
  return (
    <Avatar className={cn([`size-9 border-2`, `border-${color}`, className])}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
