import { Editor, EditorProvider } from 'react-simple-wysiwyg';
import { UserAvatar } from '../Avatar/Avatar';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface Props {
  data: {
    user?: {
      profilePicture: string | null;
      color: string;
      displayName: string;
    };
    comment: {
      createdAt?: string;
      content: string;
    };
  };
}

export const UserComment = ({ data }: Props) => {
  return (
    <div className="flex flex-col">
      <span className="flex items-center">
        {data.user ? (
          <UserAvatar src={data.user.profilePicture ?? ''} color={data.user.color} />
        ) : (
          <Skeleton className="size-9 rounded-full" />
        )}
        <div className="ml-1 flex flex-col">
          <span className="text-sm">{!data.user ? <Skeleton className="h-1 w-1/2" /> : data.user.displayName}</span>
          {data.comment.createdAt && (
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(data.comment.createdAt, { addSuffix: true })}
            </span>
          )}
        </div>
      </span>
      <CommentArea value={data.comment.content} />
    </div>
  );
};

interface CommentAreaProps {
  value: string;
  withoutExpanding?: boolean;
}

export const CommentArea = ({ value, withoutExpanding }: CommentAreaProps) => {
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

  const shouldBeExpandable = !withoutExpanding && isTruncated;

  return (
    <div className="pb-2">
      <EditorProvider>
        <Editor
          containerProps={{ className: '!border-none !min-h-0' }}
          className={cn([
            'truncate overflow-hidden break-words !p-1 text-wrap text-sm w-full',
            isExpanded ? '' : 'line-clamp-2',
          ])}
          disabled
          value={value}
          ref={textRef}
        />
      </EditorProvider>
      {shouldBeExpandable && (
        <button
          aria-label={isExpanded ? 'Show Less' : 'Show More'}
          onClick={toggleText}
          className="mt-2 w-full text-left text-xs font-semibold text-blue-500 hover:underline">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};
