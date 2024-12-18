import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';
import Draggable from 'react-draggable';
import CommentInput from './CommentInput';
import { cn } from '@extension/ui';
import usePositionCalculator from './usePositionCalculator';
import type { ThreadPosition } from './types';

type CallbackCreationParams = { comment: string } & ThreadPosition;

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  pos: ThreadPosition;
  onCreate: (val: CallbackCreationParams) => void;
}

const ThreadInit = ({ onCreate, pos, ...rest }: ThreadInitProps) => {
  const { position } = usePositionCalculator({
    x: pos.x ?? 0,
    y: pos.y ?? 0,
    rect: pos.rect as DOMRect | null,
    targetSelector: pos.targetSelector ?? undefined,
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
                comment,
                ...pos,
              });
            }}
          />
        </motion.div>
      </div>
    </Draggable>
  );
};

export default ThreadInit;
