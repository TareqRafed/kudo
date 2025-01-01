import { Avatar, AvatarFallback, AvatarImage, cn } from '@extension/ui';
import useUserColor from '@src/hooks/useUserColor';

interface Props {
  src?: string;
  userId: number | string;
  className?: string;
}

export const UserAvatar = ({ src, userId, className }: Props) => {
  const color = useUserColor(userId);
  return (
    <Avatar style={{ borderColor: color }} className={cn([`dark size-9 border-2`, className])}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <div className="size-full" style={{ background: `linear-gradient(135deg, ${color}, #000)` }}></div>
      </AvatarFallback>
    </Avatar>
  );
};
