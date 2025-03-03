'use client';

import { cn } from '@kudo/ui';
import { ThreadComment } from '../Thread/Thread';

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({ className, description = 'Needs attention imo' }: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-[22rem] -skew-y-[8deg] select-none flex-col justify-between backdrop-blur-sm  transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] rounded-lg overflow-hidden hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className,
      )}
    >
      <div className="bg-transparent relative max-h-[450px] overflow-auto rounded-lg border">
        <ThreadComment
          minimal={false}
          showActions={false}
          comment={{
            id: 1,
            created_at: new Date().toString(),
            content: description,
            creator: {
              id: '1',
              profile_picture: '',
              first_name: 'You',
              last_name: '',
            },
          }}
        />
      </div>
    </div>
  );
}

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const displayCards = cards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps) => (
        <DisplayCard key={cardProps.title} {...cardProps} />
      ))}
    </div>
  );
}
