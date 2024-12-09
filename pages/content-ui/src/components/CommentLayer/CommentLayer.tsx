import { cn } from '@extension/ui';
import useToolbarStore from '@src/store/toolbar';
import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Thread, ThreadLocation } from '@extension/shared';
import ThreadInit from './ThreadInitializer';
import ThreadTag from './Thread';

const getCssSelector = (el: Element) => {
  let path = [],
    parent;
  while ((parent = el.parentNode)) {
    path.unshift(`${el.tagName}:nth-child(${[].indexOf.call(parent.children, el) + 1})`);
    el = parent;
  }
  return `${path.join(' > ')}`.toLowerCase();
};

const threads_m: Thread[] = [
  {
    id: '1',
    interacted: [{ name: 'x' }, { name: 'y' }],
    creator: { name: 'Y' },
    x: 20,
    y: 501.2,
    rect: null,
    active: true,
    targetSelector: '',
    windowH: 9,
    windowW: 8,
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
  const [threadSpawn, setThreadSpawn] = useState<ThreadLocation>({
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
    setThreadSpawn(prev => ({ ...prev, active: false }));
    if (!toolbar.comment.inUse) return;
    const target = document.elementFromPoint(e.clientX, e.clientY);
    const selector = target ? getCssSelector(target) : '';
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
    toggleToolbarItem('comment'); // off
  };

  return (
    <div
      className={cn([
        toolbar.comment.inUse && 'comment-cursor',
        toolbar.comment.inUse || threadSpawn.active ? 'pointer-events-auto' : 'pointer-events-none',
        ' fixed inset-0 z-[2147483644] size-full',
      ])}
      onClick={spawnThread}>
      {threads.map(thread => {
        return <ThreadTag key={thread.id} data={thread} />;
      })}
      {threadSpawn.active && !toolbar.comment.inUse && (
        <ThreadInit
          onCreate={val => {
            setThreads(prev => [...prev, val]);
            setThreadSpawn(prev => ({ ...prev, active: false }));
          }}
          pos={threadSpawn}
        />
      )}
    </div>
  );
};
