import { Avatar, AvatarFallback, AvatarImage, cn } from '@extension/ui';
import { useSendMessage } from '@src/hooks/useSendMessage';

interface Props {
  userId: number | string;
  className?: string;
}

export const UserAvatar = ({ userId, className }: Props) => {
  const { data: member } = useSendMessage({
    action: 'RPC',
    payload: 'get_member_with_metadata',
    args: { user_id: userId.toString() },
  });
  const ppSrc = member?.data?.data?.[0].profile_picture ?? '';
  const color = member?.data?.data?.[0].color ?? '#fff';
  return (
    <Avatar style={{ borderColor: color }} className={cn([`dark size-9 border-2`, className])}>
      <AvatarImage src={ppSrc} />
      <AvatarFallback>
        <div className="size-full" style={{ background: `linear-gradient(135deg, ${color}, #000)` }}></div>
      </AvatarFallback>
    </Avatar>
  );
};
