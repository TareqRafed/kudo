import { cn } from '@/lib/utils';

interface Props {
  borderColor?: string;
  className?: string;
}

export const UserAvatar = ({ borderColor = '#125CBD', className }: Props) => {
  return (
    <div style={{ borderColor: borderColor }} className={cn([`dark size-9 border-2 rounded-full`, className])}>
      <div
        className="size-full rounded-full"
        style={{ background: `linear-gradient(135deg, ${borderColor}, #000)` }}></div>
    </div>
  );
};
