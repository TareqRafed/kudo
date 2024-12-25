import { motion } from 'framer-motion';
import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import CommentInput from './CommentInput';
import { cn } from '@extension/ui';
import type { ThreadPosition } from './types';
import BounceBoundary from '../BounceBoundary/BounceBoundary';

type CallbackCreationParams = { comment: string };

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  onCreate: (val: CallbackCreationParams) => void;
}

const ThreadInit = ({ onCreate, ...rest }: ThreadInitProps) => {
  return (
    <div>
      <motion.div
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0.8 }}
        style={{ position: 'absolute', left: 0, top: 0 }}
        className={cn([`bg-transparent items-start flex select-none`])}>
        <pre className="cursor-grab">
          <img
            alt="Comment Flag"
            src={chrome.runtime.getURL('content-ui/comment-flag.svg')}
            className="pointer-events-none mr-5"
          />
        </pre>
        <BounceBoundary
          transform={{ x: -120 }}
          factor={{ x: '10px', y: '10px' }}
          position={{ x: position.left, y: position.top }}>
          <CommentInput
            onCreate={comment => {
              onCreate({
                comment,
              });
            }}
          />
        </BounceBoundary>
      </motion.div>
    </div>
  );
};

export default ThreadInit;
