'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { UserAvatar } from './UserAvatar';
import CommentPin from './CommentPin';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';
import { CheckIcon, Ellipsis, SmilePlus } from 'lucide-react';
import BounceBoundary from './BounceBoundary';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { formatRelative } from 'date-fns';

type Comment = {
  id: string | number;
  content: string;
  created_at: string;
  creator: {
    id: string;
    first_name: string;
    last_name: string;
    profile_picture?: string;
  };
};

export type ThreadData = {
  comments: Comment[];
};

type ThreadProps = {
  data: ThreadData;
} & ComponentPropsWithoutRef<'div'>;

const Thread = ({ data, ...rest }: ThreadProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showExtended, setShowExtended] = useState(false);

  const commentPinRef = useRef<HTMLDivElement>(null);

  return (
    <div
      aria-expanded={showExtended}
      aria-label="Expand Comments"
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => {
        setIsCollapsed(true);
        setShowExtended(false);
      }}
      className={cn([`w-fit pointer-events-auto z-max-2 flex flex-col select-none items-start`, rest.className])}
    >
      <CommentPin
        ref={commentPinRef}
        numberOfComments={data.comments.length}
        usersIds={data.comments?.map((cmnt) => cmnt.creator.id)}
      />
      <AnimatePresence>
        {!isCollapsed && (
          <BounceBoundary helper={{ width: 420, height: 100 }} targetRef={commentPinRef}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="bg-background dark relative max-h-[450px] overflow-auto rounded-lg border">
                <ThreadComment minimal={false} comment={data.comments[0]} />
              </div>
            </motion.div>
          </BounceBoundary>
        )}
      </AnimatePresence>
    </div>
  );
};

type CommentSectionProps = {
  comment: Comment;
  /**
   * Shows all actions toolbar, if false minimal is ignored
   */
  showActions?: boolean;
  /**
   * Shows only emojies from the action bar, if showActions is false, this value is ignored
   */
  minimal?: boolean;
};

export const ThreadComment = ({ comment, showActions = false, minimal = false }: CommentSectionProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-96 border-b px-2 py-3" ref={modalRef}>
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <UserAvatar className={cn(['size-7'])} />
          <div className="flex flex-col text-xs">
            <span className="font-bold">{`${comment.creator?.first_name} ${comment.creator?.last_name}`}</span>
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
                <DropdownMenuContent>
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
  return <div className={cn(['truncate overflow-hidden break-words text-wrap text-sm w-full'])}>{comment.content}</div>;
};

export default Thread;
