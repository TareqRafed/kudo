import { cn } from '@extension/ui';
import useToolbarStore from '@src/store/toolbar';
import type { MouseEventHandler, RefObject } from 'react';
import { useRef, useState } from 'react';
import type { Database, Json, Message } from '@extension/shared';
import { sendMessage } from '@extension/shared';
import ThreadInit from './ThreadInitializer';
import type { ThreadData } from './Thread';
import ThreadTag from './Thread';
import { useSendMessage } from '@src/hooks/useSendMessage';
import type { ThreadPosition } from './types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useWebsiteStore from '@src/store/website';
import type { OnDropEvent } from '../Magnet/Magnet';
import Magnet from '../Magnet/Magnet';

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
type UpdateThreadArgs = Extract<Message, { action: 'RPC'; payload: 'update_record' }>['args'];

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

  const layerRef = useRef<HTMLDivElement>(null);

  /**
   * Changes the state of the captured element
   */
  const handleThreadSpawn = (clientX: number, clientY: number) => {
    if (!layerRef.current) return;

    const documentWidth = document.documentElement.clientWidth;
    const documentHeight = document.documentElement.clientHeight;

    // Clamp clientX and clientY
    const clampedX = Math.max(5, Math.min(clientX, documentWidth - 40));
    const clampedY = Math.max(5, Math.min(clientY, documentHeight - 30));

    layerRef.current.style.pointerEvents = 'none';
    const target = document.elementFromPoint(clampedX, clampedY);
    layerRef.current.style.pointerEvents = 'auto';

    const selector = target ? getCssSelector(target) : '';
    const rect = target?.getBoundingClientRect();

    setThreadSpawn(() => ({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      rect: rect ?? null,
      x: clampedX,
      y: clampedY,
      active: true,
      targetSelector: selector,
    }));
  };

  const spawnThread: MouseEventHandler<HTMLDivElement> = e => {
    setThreadSpawn(prev => ({ ...prev, active: false }));
    if (!toolbar.comment.inUse) return;

    handleThreadSpawn(e.clientX, e.clientY);

    toggleToolbarItem('comment'); // off
  };

  if (!website.id) return;
  return (
    <div
      id="ab-layer"
      ref={layerRef}
      aria-hidden="true"
      style={{ pointerEvents: toolbar.comment.inUse || threadSpawn.active ? 'all' : 'none' }}
      className={cn([
        toolbar.comment.inUse && 'comment-cursor',
        'text-white dark fixed inset-0 z-[2147483644] size-full',
      ])}
      onClick={spawnThread}>
      {(data?.data?.data ?? []).map(thread => (
        <MagnifiedTag key={thread.id} layerRef={layerRef} thread={thread} />
      ))}

      {threadSpawn.active && !toolbar.comment.inUse && (
        <Magnet
          layerRef={layerRef}
          initData={{
            targetSelector: threadSpawn.targetSelector ?? undefined,
            x: threadSpawn.x,
            y: threadSpawn.y,
            rect: threadSpawn.rect,
          }}
          onDrop={e =>
            setThreadSpawn(prev => ({
              targetSelector: e.targetSelector,
              x: e.x,
              y: e.y,
              active: prev.active,
              rect: e.rect,
              windowWidth: e.windowW,
              windowHeight: e.windowH,
            }))
          }>
          <div>
            <ThreadInit
              onCreate={val => {
                const { active: _, targetSelector, windowWidth, windowHeight, ...rest } = threadSpawn;
                mutate({
                  ...rest,
                  target_selector: targetSelector ?? undefined,
                  content: val.comment,
                  window_width: windowWidth,
                  window_height: windowHeight,
                  website_id: website.id ?? 0,
                });

                setThreadSpawn(prev => ({ ...prev, active: false }));
              }}
            />
          </div>
        </Magnet>
      )}
    </div>
  );
};

type Thread = {
  thread: ThreadData;
  layerRef: RefObject<HTMLDivElement>;
};
const MagnifiedTag = ({ thread, layerRef }: Thread) => {
  const clientQuery = useQueryClient();

  const { mutate: mutateThread, isPending } = useMutation({
    mutationFn: (args: UpdateThreadArgs) => sendMessage({ action: 'RPC', payload: 'update_record', args }),
    mutationKey: ['threads'],
    onError: () => {},
    onSuccess: () => {
      clientQuery.invalidateQueries({ queryKey: ['threads'] });
    },
  });

  const handleTagDrop = (e: OnDropEvent, id: number) => {
    const payload = {
      window_width: e.windowW,
      window_height: e.windowH,
      rect: e.rect,
      x: e.x,
      y: e.y,
      target_selector: e.targetSelector,
    };

    mutateThread({ table_name: 'threads', record_id: id, updates: payload as Json });
  };

  return (
    <Magnet
      layerRef={layerRef}
      initData={{ targetSelector: thread.target_selector ?? undefined, x: thread.x, y: thread.y, rect: thread.rect }}
      onDrop={e => handleTagDrop(e, thread.id ?? 0)}>
      <div>
        <ThreadTag data={thread} isLoading={isPending} />
      </div>
    </Magnet>
  );
};
