import { Avatar, AvatarFallback, AvatarImage, cn } from '@kudo/ui';

interface Props {
  src: string;
  color: string;
  className?: string;
}

export const UserAvatar = ({ color, src, className }: Props) => {
  return (
    <Avatar style={{ borderColor: color }} className={cn(['size-9 border-2', className])}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <div className="size-full" style={{ background: `linear-gradient(135deg, ${color}, #000)` }} />
      </AvatarFallback>
    </Avatar>
  );
};
