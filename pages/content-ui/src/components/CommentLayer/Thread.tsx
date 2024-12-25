import { Button, cn, Input } from '@extension/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { UserAvatar } from '../UserAvatar';
import CommentPin from './CommentPin';
import { useEffect, useRef, useState } from 'react';
import { CheckIcon, SendIcon } from 'lucide-react';
import { sendMessage, type Database } from '@extension/shared';
import { formatRelative } from 'date-fns';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BounceBoundary from '../BounceBoundary/BounceBoundary';

export type ThreadData = Database['public']['Functions']['get_threads_for_website_id']['Returns'] extends (infer U)[]
  ? U
  : never;

type ThreadProps = {
  data: ThreadData;
  isLoading?: boolean;
};

const ThreadTag = ({ data, isLoading }: ThreadProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showReply, setShowReply] = useState(false);

  if (!data.id || !data.comments || !data.comments?.[0]) return;

  return (
    <div
      aria-hidden="true"
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => {
        setIsCollapsed(true);
        setShowReply(false);
      }}
      onMouseDown={() => setShowReply(true)}
      style={{ position: 'absolute', left: 0, top: 0 }}
      className={cn([`pointer-events-auto flex flex-col select-none items-start`])}>
      <CommentPin
        isLoading={isLoading}
        numberOfComments={data.comments.length}
        usersIds={data.comments?.map(cmnt => cmnt.creator_id)}
      />
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, delay: 0.2 }}>
            <BounceBoundary position={{ x: 0, y: 0 }}>
              <MainThreadComment comment={data.comments[0]} />
              {showReply && (
                <>
                  <div className="max-h-[450px] overflow-auto">
                    {data.comments.slice(1).map(cmnt => (
                      <ThreadReply key={cmnt.id} comment={cmnt} />
                    ))}
                  </div>
                  <CommentInput threadId={data.id} />
                </>
              )}
            </BounceBoundary>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CommentInput = ({ threadId }: { threadId: number }) => {
  const [input, setInput] = useState('');

  const clientQuery = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (args: NewCommentArgs) => sendMessage({ action: 'RPC', payload: 'create_new_comment', args }),
    mutationKey: ['threads'],
    onSuccess: () => {
      clientQuery.invalidateQueries({ queryKey: ['threads'] });
    },
  });

  return (
    <div className="bg-background dark mt-1 flex items-center overflow-hidden rounded-[0.2em] border">
      <Input
        placeholder="Reply to this thread"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="ring- mr-2 border-transparent"
      />
      <Button
        onClick={() => mutate({ target_content: input, target_thread_id: threadId })}
        className="mx-2"
        size={'sm'}
        variant={'ghost'}>
        <SendIcon className="size-2" />
      </Button>
    </div>
  );
};

type CommentSectionProps = {
  comment: {
    id: number;
    content: string;
    created_at: string;
    creator: {
      first_name: string | null;
      last_name: string | null;
      profile_picture: string | null;
    } | null;
  };
};

type NewCommentArgs = Database['public']['Functions']['create_new_comment']['Args'];

const MainThreadComment = ({ comment }: CommentSectionProps) => {
  return (
    <div className="bg-background dark w-96 rounded border px-2 py-3">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <UserAvatar className={cn(['size-7'])} />
          <div className="flex flex-col text-xs">
            <span className="font-bold">{`${comment.creator?.first_name} ${comment.creator?.last_name}`}</span>
            <span className="text-[10px]">{formatRelative(comment.created_at || new Date(), new Date())}</span>
          </div>
        </div>
        <Button variant={'ghost'} size={'xs'}>
          <CheckIcon className="size-7" />
        </Button>
      </div>
      <span className="text-sm">{comment.content || 'Comment Deleted'}</span>
    </div>
  );
};

const ThreadReply = ({ comment }: CommentSectionProps) => {
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
    <div className="bg-background dark my-2 w-96 rounded border px-2 py-3">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <UserAvatar className={cn(['size-7'])} />
          <div className="flex flex-col text-xs">
            <span className="font-bold">{`${comment.creator?.first_name} ${comment.creator?.last_name}`}</span>
          </div>
        </div>
        <span className="text-[10px]">{formatRelative(comment.created_at || new Date(), new Date())}</span>
      </div>
      <p
        ref={textRef}
        className={cn([
          'truncate overflow-hidden break-words text-wrap text-sm w-full',
          isExpanded ? '' : 'line-clamp-2',
        ])}>
        {comment.content || 'Comment Deleted'}
      </p>
      {isTruncated && (
        <button onClick={toggleText} className="mt-2 text-xs text-blue-500 hover:underline">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ThreadTag;
