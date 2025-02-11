import {
  Button,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@extension/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { UserAvatar } from '../UserAvatar';
import CommentPin from './CommentPin';
import { useEffect, useRef, useState } from 'react';
import { CheckIcon, Ellipsis, SmilePlus } from 'lucide-react';
import { sendMessage, type Database } from '@extension/shared';
import { formatRelative } from 'date-fns';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BounceBoundary from '../BounceBoundary/BounceBoundary';
import CommentInput from './CommentInput';
import { useClickAway } from '@src/hooks/useClickAway';
import { Editor, EditorProvider } from 'react-simple-wysiwyg';

export type ThreadData = Database['public']['Functions']['get_threads_for_website_id']['Returns'] extends (infer U)[]
  ? U
  : never;

type ThreadProps = {
  data: ThreadData;
  isLoading?: boolean;
  /**
   * If dragging helper component near the comment pin won't be showen
   */
  isDragging?: boolean;
};

const ThreadTag = ({ data, isLoading, isDragging }: ThreadProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showExtended, setShowExtended] = useState(false);

  const commentPinRef = useRef<HTMLDivElement>(null);

  const [ref, event] = useClickAway<HTMLDivElement>(() => {
    setIsCollapsed(true);
    setShowExtended(false);
  });

  if (!data.id) return;

  return (
    <div
      aria-expanded={showExtended}
      tabIndex={0}
      role="button"
      key={data.id}
      aria-label="Expand Comments"
      id={`${data.id} ${data.creator_id} ${data.created_at}`}
      ref={ref}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => {
        if (!showExtended) {
          setIsCollapsed(true);
          setShowExtended(false);
        }
      }}
      onMouseDown={() => {
        document.dispatchEvent(event);
        setShowExtended(true);
      }}
      style={{ position: 'absolute', left: 0, top: 0 }}
      className={cn([`pointer-events-auto z-max-2 flex flex-col select-none items-start`])}>
      <CommentPin
        ref={commentPinRef}
        isLoading={isLoading}
        content={data.comments.length + 1}
        usersIds={[...new Set([data.creator.id, ...data.comments?.map(cmnt => cmnt.creator.id)])]}
      />
      <AnimatePresence>
        {!isCollapsed && !isDragging && (
          <BounceBoundary helper={{ width: 420, height: 100 }} targetRef={commentPinRef}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.2 }}>
              <div className="bg-background dark relative max-h-[450px] overflow-auto rounded-lg border text-white">
                <ThreadComment
                  minimal={false}
                  showActions={showExtended}
                  comment={{ content: data.content, creator: data.creator, created_at: data.created_at }}
                />
                {showExtended && (
                  <>
                    <div>
                      {data.comments.map(cmnt => (
                        <ThreadComment showActions minimal key={cmnt.id} comment={cmnt} />
                      ))}
                    </div>
                    <CommentInputMutate threadId={data.id} />
                  </>
                )}
              </div>
            </motion.div>
          </BounceBoundary>
        )}
      </AnimatePresence>
    </div>
  );
};

const CommentInputMutate = ({ threadId }: { threadId: number }) => {
  const clientQuery = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (args: NewCommentArgs) => sendMessage({ action: 'RPC', payload: 'create_new_comment', args }),
    mutationKey: ['threads'],
    onSuccess: () => {
      clientQuery.invalidateQueries({ queryKey: ['threads'] });
    },
  });

  return (
    <CommentInput
      className="border-t"
      onCreate={input => mutate({ target_content: input, target_thread_id: threadId })}
    />
  );
};

type CommentSectionProps = {
  comment: {
    id: number;
    content: string;
    created_at: string;
    creator: {
      id: string;
      display_name: string;
      profile_picture: string | null;
    } | null;
  };
  /**
   * Shows all actions toolbar, if false minimal is ignored
   */
  showActions?: boolean;
  /**
   * Shows only emojies from the action bar, if showActions is false, this value is ignored
   */
  minimal?: boolean;
};

type NewCommentArgs = Database['public']['Functions']['create_new_comment']['Args'];

const ThreadComment = ({ comment, showActions = false, minimal = false }: CommentSectionProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-96 border-b px-2 py-3" ref={modalRef}>
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <UserAvatar userId={comment.creator?.id} className={cn(['size-7'])} />
          <div className="flex flex-col text-xs">
            <span className="font-bold">{`${comment.creator?.display_name}`}</span>
            <span className="text-[10px]">{formatRelative(comment.created_at || new Date(), new Date())}</span>
          </div>
        </div>
        <div className={cn(['flex space-x-1', !showActions && 'hidden'])}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => alert('clicked')} variant={'ghost'} size={'xs'}>
                <SmilePlus className="!size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>React</TooltipContent>
          </Tooltip>

          {!minimal && (
            <>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size={'xs'} variant={'ghost'}>
                        <Ellipsis className="!size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>More</TooltipContent>
                  </Tooltip>
                </DropdownMenuTrigger>
                <DropdownMenuContent container={modalRef.current ?? document.body}>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={() => alert('clicked')} variant={'ghost'} size={'xs'}>
                    <CheckIcon className="!size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Resolve</TooltipContent>
              </Tooltip>
            </>
          )}
        </div>
      </div>
      <Comment comment={comment} />
    </div>
  );
};

const Comment = ({ comment }: CommentSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (textRef.current) {
      const isTextTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsTruncated(isTextTruncated);
    }
  }, []);

  return (
    <>
      <EditorProvider>
        <Editor
          className={cn([
            'truncate overflow-hidden break-words text-wrap text-sm w-full',
            isExpanded ? '' : 'line-clamp-2',
          ])}
          disabled
          value={comment.content}
          ref={textRef}
        />
      </EditorProvider>
      {isTruncated && (
        <button
          aria-label={isExpanded ? 'Show Less' : 'Show More'}
          onClick={toggleText}
          className="mt-2 text-xs text-blue-500 hover:underline">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </>
  );
};

export default ThreadTag;
