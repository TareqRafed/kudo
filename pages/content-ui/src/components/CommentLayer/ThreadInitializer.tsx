import type { Thread, ThreadLocation } from '@extension/shared';
import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';
import Draggable from 'react-draggable';
import CommentInput from './CommentInput';
import { cn } from '@extension/ui';
import usePositionCalculator from './usePositionCalculator';

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  pos: ThreadLocation;
  onCreate: (val: Thread) => void;
}

const ThreadInit = ({ onCreate, pos, ...rest }: ThreadInitProps) => {
  const { position } = usePositionCalculator({
    x: pos.x,
    y: pos.y,
    rect: pos.rect,
    targetSelector: pos.targetSelector,
  });

  return (
    <Draggable>
      <div>
        <motion.div
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0.8 }}
          style={{ position: 'absolute', left: `${position.left}px`, top: `${position.top}px` }}
          className={cn([`bg-transparent items-start flex select-none`])}>
          <img
            alt="Comment Flag"
            src={chrome.runtime.getURL('content-ui/comment-flag.svg')}
            className="pointer-events-none mr-5"
          />
          <CommentInput
            onCreate={comment => {
              onCreate({
                ...pos,
                comments: [{ content: comment, creator: { name: 'test' }, created_at: new Date() }],
                id: '3',
                interacted: [],
                creator: { name: 'creator' },
              });
            }}
          />
        </motion.div>
      </div>
    </Draggable>
  );
};

export default ThreadInit;
