import { cn } from '@kudo/ui';
import useToolbarStore from '@src/store/toolbar';
import type { MouseEventHandler, RefObject } from 'react';
import { useRef, useState } from 'react';
import type { Json, Message } from '@kudo/shared';
import { sendMessage } from '@kudo/shared';
import ThreadInit from './ThreadInitializer';
import type { ThreadData } from './Thread';
import ThreadTag from './Thread';
import { useSendMessage } from '@src/hooks/useSendMessage';
import type { ThreadPosition } from './types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useWebsiteStore from '@src/store/website';
import type { OnDropEvent } from '../Magnet/Magnet';
import Magnet from '../Magnet/Magnet';
import CommentPin from './CommentPin';
import { useHotkeys } from 'react-hotkeys-hook';
import { getPublic } from '@src/util';
import { useRegisterDocument } from '@src/hooks/useRegisterDocument';

const getCssSelector = (el: Element): string => {
  const path: string[] = [];
  let elm = el;

  while (elm.parentElement) {
    const parent = elm.parentElement;
    const index = Array.from(parent.children).indexOf(el) + 1;
    path.unshift(`${el.tagName}:nth-child(${index})`);
    elm = parent;
  }

  return path.join(' > ').toLowerCase();
};

type NewThreadArgs = Extract<Message, { action: 'RPC'; payload: 'create_new_thread' }>['args'];
type UpdateThreadArgs = Extract<Message, { action: 'RPC'; payload: 'update_record' }>['args'];

export const CommentLayer = () => {
  useRegisterDocument();

  const { website } = useWebsiteStore();
  const { toolbarItems, toggleToolbarItem } = useToolbarStore();

  const [isDragging, setIsDragging] = useState(false);

  const clientQuery = useQueryClient();
  const { data: threads } = useSendMessage(
    {
      action: 'RPC',
      payload: 'get_threads_for_website_id',
      args: {
        id: website.id,
      },
    },
    ['threads', website.id],
  );

  const { data: user } = useSendMessage({ action: 'RPC', payload: 'get_current_member_with_metadata', args: {} });

  const {
    mutate,
    isPending: pendingThread,
    variables: pendingThreadData,
  } = useMutation({
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

  const spawnThread: MouseEventHandler<HTMLDivElement> = (e) => {
    setThreadSpawn((prev) => ({ ...prev, active: false }));
    if (!toolbarItems.comment.inUse) return;
    handleThreadSpawn(e.clientX, e.clientY);
    toggleToolbarItem('comment'); // off
  };

  useHotkeys('esc', () => setThreadSpawn((prev) => ({ ...prev, active: false })));

  const threadInitRef = useRef<HTMLDivElement>(null);

  const addCursorUrl = getPublic('add-comment-cursor.png');

  // if (!website.id) throw new Error('Something went wrong');
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Hidden element
    <div
      id="ab-layer"
      ref={layerRef}
      aria-hidden="true"
      style={{
        pointerEvents: toolbarItems.comment.inUse || threadSpawn.active ? 'all' : 'none',
        cursor: toolbarItems.comment.inUse ? `url("${addCursorUrl}"), auto` : 'auto',
      }}
      className={cn(['text-white dark fixed inset-0 z-max-2 size-full'])}
      onClick={spawnThread}
    >
      {(threads?.data?.data ?? []).map((thread) => (
        <MagnifiedTag key={thread.id} layerRef={layerRef} thread={thread} />
      ))}

      {pendingThread && pendingThreadData && (
        <span style={{ position: 'absolute', left: pendingThreadData.x, top: pendingThreadData.y }}>
          <CommentPin
            isLoading
            avatars={[
              { profilePicture: user?.data?.data?.[0].profile_picture ?? '', color: user?.data?.data?.[0].color ?? '' },
            ]}
            content=""
          />
        </span>
      )}

      {threadSpawn.active && !toolbarItems.comment.inUse && (
        <Magnet
          onStart={() => setIsDragging(true)}
          layerRef={layerRef}
          draggedRef={threadInitRef}
          initData={{
            targetSelector: threadSpawn.targetSelector ?? undefined,
            x: threadSpawn.x,
            y: threadSpawn.y,
            rect: threadSpawn.rect,
          }}
          onDrop={(e) => {
            setThreadSpawn((prev) => ({
              targetSelector: e.targetSelector,
              x: e.x,
              y: e.y,
              active: prev.active,
              rect: e.rect,
              windowWidth: e.windowW,
              windowHeight: e.windowH,
            }));
            setIsDragging(false);
          }}
        >
          <div ref={threadInitRef}>
            <ThreadInit
              isDragging={isDragging}
              onCreate={(val) => {
                const { active: _, targetSelector, windowWidth, windowHeight, ...rest } = threadSpawn;
                mutate({
                  ...rest,
                  target_selector: targetSelector ?? undefined,
                  content: val.comment,
                  window_width: windowWidth,
                  window_height: windowHeight,
                  website_id: website.id ?? 0,
                });

                setThreadSpawn((prev) => ({ ...prev, active: false }));
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
  const [isDragging, setIsDragging] = useState(false);

  const { mutate: mutateThread, isPending } = useMutation({
    mutationFn: (args: UpdateThreadArgs) => sendMessage({ action: 'RPC', payload: 'update_record', args }),
    mutationKey: ['threads'],
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
  const threadRef = useRef<HTMLDivElement>(null);
  if (threadRef.current === null) return;

  return (
    <Magnet
      draggedRef={threadRef as RefObject<HTMLDivElement>}
      onStart={() => setIsDragging(true)}
      layerRef={layerRef}
      initData={{ targetSelector: thread.target_selector, x: thread.x, y: thread.y, rect: thread.rect }}
      onDrop={(e) => {
        setIsDragging(false);
        handleTagDrop(e, thread.id ?? 0);
      }}
    >
      <div ref={threadRef}>
        <ThreadTag isDragging={isDragging} data={thread} isLoading={isPending} />
      </div>
    </Magnet>
  );
};
