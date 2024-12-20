import { cn } from '@extension/ui';
import useToolbarStore from '@src/store/toolbar';
import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Json, Message } from '@extension/shared';
import { sendMessage } from '@extension/shared';
import ThreadInit from './ThreadInitializer';
import ThreadTag from './Thread';
import { useSendMessage } from '@src/hooks/useSendMessage';
import type { ThreadPosition } from './types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useWebsiteStore from '@src/store/website';

const getCssSelector = (el: Element) => {
  const path = [];
  let parent: ParentNode | null;
  while ((parent = el.parentNode)) {
    path.unshift(`${el.tagName}:nth-child(${[].indexOf.call(parent.children, el) + 1})`);
    el = parent;
  }
  return `${path.join(' > ')}`.toLowerCase();
};

type NewThreadArgs = Extract<Message, { action: 'RPC'; payload: 'create_new_thread' }>['args'];

export const CommentLayer = () => {
  const { website } = useWebsiteStore();
  const { toolbar, toggleToolbarItem } = useToolbarStore();

  const clientQuery = useQueryClient();
  const { data } = useSendMessage(
    {
      action: 'RPC',
      payload: 'get_threads_for_website_id',
      args: {
        id: website.id || 0,
      },
    },
    ['threads', website.id],
  );
  const { mutate } = useMutation({
    mutationFn: (args: NewThreadArgs) => sendMessage({ action: 'RPC', payload: 'create_new_thread', args }),
    mutationKey: ['threads'],
    onSuccess: () => {
      clientQuery.invalidateQueries({ queryKey: ['threads'] });
    },
  });

  const [threadSpawn, setThreadSpawn] = useState<ThreadPosition>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    rect: null,
    x: 0,
    y: 0,
    active: false,
    targetSelector: null,
  });

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

  console.log(data, website);

  if (!website.id) return;
  return (
    <div
      aria-hidden="true"
      className={cn([
        toolbar.comment.inUse && 'comment-cursor',
        toolbar.comment.inUse || threadSpawn.active ? 'pointer-events-auto' : 'pointer-events-none',
        ' fixed inset-0 z-[2147483644] size-full',
      ])}
      onClick={spawnThread}>
      {(data?.data?.data ?? []).map(thread => {
        return <ThreadTag key={thread.id} data={thread} />;
      })}

      {threadSpawn.active && !toolbar.comment.inUse && (
        <ThreadInit
          onCreate={val => {
            mutate({
              content: val.comment,
              x: val.x,
              y: val.y,
              target_selector: val.targetSelector || undefined,
              rect: (val.rect as Json) || undefined,
              windowWidth: val.windowWidth,
              windowHeight: val.windowHeight,
              website_id: website.id,
            });

            setThreadSpawn(prev => ({ ...prev, active: false }));
          }}
          pos={threadSpawn}
        />
      )}
    </div>
  );
};
