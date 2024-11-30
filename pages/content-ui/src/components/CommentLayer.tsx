import { Button, cn } from '@extension/ui';
import { Check, type User } from 'lucide-react';
import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import CommentFlag from '../../public/comment-flag.svg';
import { useState } from 'react';

type User = {
  name: string;
};

type Comment = {
  content: string;
  creator: User;
  created_at: Date;
};

type Thread = {
  creator: User;
  id: string;
  interacted: User[];
  comments: Comment[];
  clientX: number;
  clientY: number;
};

const threads_m: Thread[] = [
  {
    id: '1',
    interacted: [{ name: 'x' }, { name: 'y' }],
    creator: { name: 'Y' },
    clientX: 20,
    clientY: 501.2,
    comments: [
      {
        content: 'This is my first comment',
        creator: { name: 'X' },
        created_at: new Date(),
      },
    ],
  },
];

export const CommentLayer = () => {
  const [threads, setThreads] = useState(threads_m);
  const [threadSpawn, setThreadSpawn] = useState({ x: 0, y: 0, active: false });

  const spawnThread: MouseEventHandler<HTMLDivElement> = e => {
    if (threadSpawn.active) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    setThreadSpawn({ x: clientX, y: clientY, active: true });
  };

  return (
    <div className="comment-cursor fixed left-0 top-0 z-[2147483646] size-full" onClick={spawnThread}>
      {threads.map(thread => {
        return <Thread key={thread.id} pos={{ x: thread.clientX, y: thread.clientY }} />;
      })}
      <ThreadInit pos={{ x: threadSpawn.x, y: threadSpawn.y }} />
    </div>
  );
};

type ThreadProps = {
  pos: {
    x: number;
    y: number;
  };
};

const Thread = ({ pos }: ThreadProps) => {
  return (
    <div style={{ position: 'absolute', left: `${pos.x}px`, top: `${pos.y}px` }} className={cn([``])}>
      This is threa
    </div>
  );
};

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  pos: {
    x: number;
    y: number;
  };
}

const ThreadInit = ({ pos, ...rest }: ThreadInitProps) => {
  return (
    <div style={{ position: 'absolute', left: `${pos.x}px`, top: `${pos.y}px` }} className={cn([`bg-background flex`])}>
      <textarea />
      <Button>
        <Check />
      </Button>
    </div>
  );
};
