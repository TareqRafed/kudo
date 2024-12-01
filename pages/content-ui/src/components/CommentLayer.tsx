import { Button, cn } from '@extension/ui';
import { useWindowSize } from '@src/hooks/useWindowSize';
import useToolbarStore from '@src/store/toolbar';
import { Check, type User } from 'lucide-react';
import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import React, { useEffect, useState } from 'react';

const getCssSelector = el => {
  let path = [],
    parent;
  while ((parent = el.parentNode)) {
    path.unshift(`${el.tagName}:nth-child(${[].indexOf.call(parent.children, el) + 1})`);
    el = parent;
  }
  return `${path.join(' > ')}`.toLowerCase();
};

function calculateScalePosition(oldRect: DOMRect, newRect: DOMRect, x: number, y: number) {
  const relativeX = (x - oldRect.left) / oldRect.width;
  const relativeY = (y - oldRect.top) / oldRect.height;

  const newX = newRect.left + relativeX * newRect.width;
  const newY = newRect.top + relativeY * newRect.height;

  return { newX, newY };
}

function calculateScrollPosition(oldRect: DOMRect, newRect: DOMRect, x: number, y: number) {
  const deltaX = newRect.left - oldRect.left;
  const deltaY = newRect.top - oldRect.top;

  const newX = x + deltaX;
  const newY = y + deltaY;

  return { newX, newY };
}

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
} & ThreadSpawnState;

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

interface CommentLayer {
  active: boolean;
}

interface ThreadSpawnState {
  windowW: number;
  windowH: number;
  rect: DOMRect | null;
  x: number;
  y: number;
  active: boolean;
  targetSelector: string;
}

export const CommentLayer = () => {
  const [threads, setThreads] = useState(threads_m);
  const [threadSpawn, setThreadSpawn] = useState<ThreadSpawnState>({
    windowW: window.innerWidth,
    windowH: window.innerHeight,
    rect: null,
    x: 0,
    y: 0,
    active: false,
    targetSelector: '',
  });
  const { toolbar, toggleToolbarItem } = useToolbarStore();

  const spawnThread: MouseEventHandler<HTMLDivElement> = e => {
    if (!toolbar.comment.inUse) return;
    e.target.style.pointerEvents = 'none';
    const target = document.elementFromPoint(e.clientX, e.clientY);
    const selector = target ? getCssSelector(target) : '';
    e.target.style.pointerEvents = 'auto';
    const rect = target?.getBoundingClientRect();
    setThreadSpawn(() => ({
      windowW: window.innerWidth,
      windowH: window.innerHeight,
      rect: rect ?? null,
      x: e.clientX,
      y: e.clientY,
      active: true,
      targetSelector: selector,
    }));
    toggleToolbarItem('comment');
  };

  return (
    <div
      className={cn([toolbar.comment.inUse && 'comment-cursor ', 'fixed inset-0 z-[2147483646] size-full'])}
      onClick={spawnThread}>
      {threads.map(thread => {
        return <Thread key={thread.id} data={thread} />;
      })}
      <ThreadInit
        onCreate={val => {
          setThreads(prev => [...prev, val]);
          setThreadSpawn(val => ({ ...val, active: false }));
        }}
        pos={threadSpawn}
      />
    </div>
  );
};

type ThreadProps = {
  data: Thread;
};

const Thread = ({ data }: ThreadProps) => {
  const [threadPosition, setThreadPosition] = useState({
    left: data.x,
    top: data.y,
  });

  useEffect(() => {
    const calculatePosition = () => {
      if (!data.rect) return;
      const newRect = document.querySelector(data.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScalePosition(data.rect, newRect, data.x, data.y);
        setThreadPosition({ left: newX, top: newY });
      } else {
        setThreadPosition({ left: data.x, top: data.y });
      }
    };

    const calculateSPosition = () => {
      if (!data.rect) return;
      const newRect = document.querySelector(data.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScrollPosition(data.rect, newRect, data.x, data.y);
        setThreadPosition({ left: newX, top: newY });
      }
    };

    calculatePosition();

    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculateSPosition);
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculateSPosition);
    };
  }, [data]);

  return (
    <>
      <div
        style={{ position: 'absolute', left: `${threadPosition.left}px`, top: `${threadPosition.top}px` }}
        className={cn([``])}>
        <img
          alt="Comment Flag"
          src={chrome.runtime.getURL('content-ui/comment-flag.svg')}
          className="mr-5 rotate-180"
        />
        {data.comments[0].content}
      </div>
    </>
  );
};

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  pos: ThreadSpawnState;
  onCreate: (val: Thread) => void;
}

const ThreadInit = ({ onCreate, pos, ...rest }: ThreadInitProps) => {
  const [threadPosition, setThreadPosition] = useState({
    left: pos.x,
    top: pos.y,
  });

  useEffect(() => {
    const calculatePosition = () => {
      if (!pos.rect) return;
      const newRect = document.querySelector(pos.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScalePosition(pos.rect, newRect, pos.x, pos.y);
        setThreadPosition({ left: newX, top: newY });
      } else {
        setThreadPosition({ left: pos.x, top: pos.y });
      }
    };

    const calculateSPosition = () => {
      if (!pos.rect) return;
      const newRect = document.querySelector(pos.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScrollPosition(pos.rect, newRect, pos.x, pos.y);
        setThreadPosition({ left: newX, top: newY });
      }
    };

    calculatePosition();

    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculateSPosition);
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculateSPosition);
    };
  }, [pos.x, pos.y, pos]);

  const [comment, setComment] = useState('');

  if (!pos.active) return;

  return (
    <div
      style={{ position: 'absolute', left: `${threadPosition.left}px`, top: `${threadPosition.top}px` }}
      className={cn([`bg-transparent items-start flex `])}>
      <img alt="Comment Flag" src={chrome.runtime.getURL('content-ui/comment-flag.svg')} className="mr-5 rotate-180" />
      <div className="bg-background dark flex w-64 flex-col overflow-hidden rounded-md border">
        <div>
          <textarea
            onChange={e => setComment(e.target.value)}
            value={comment}
            placeholder="Leave a comment..."
            className="w-full resize-none px-2 py-3"
          />
        </div>
        <div id="toolbar" className="flex justify-end space-x-2 border-t p-1">
          <Button
            onClick={() =>
              onCreate({
                ...pos,
                comments: [{ content: comment, creator: { name: 'test' }, created_at: new Date() }],
                id: '3',
                interacted: [],
                creator: { name: 'creator' },
              })
            }
            size={'sm'}
            variant={'ghost'}>
            <Check />
          </Button>
        </div>
      </div>
    </div>
  );
};
