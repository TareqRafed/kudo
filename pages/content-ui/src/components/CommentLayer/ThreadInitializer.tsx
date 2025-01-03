import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react';
import CommentInput from './CommentInput';
import { cn } from '@extension/ui';
import BounceBoundary from '../BounceBoundary/BounceBoundary';

type CallbackCreationParams = { comment: string };

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  onCreate: (val: CallbackCreationParams) => void;
  isDragging?: boolean;
}

const ThreadInit = ({ onCreate, isDragging, ...rest }: ThreadInitProps) => {
  const pointerRef = useRef<HTMLPreElement>(null);
  return (
    <div>
      <div
        aria-hidden
        onClick={e => e.stopPropagation()}
        style={{ position: 'absolute', left: 0, top: 0 }}
        className={cn([`pointer-events-auto forth-index bg-transparent items-start flex select-none`])}>
        <pre ref={pointerRef} className="cursor-grab active:cursor-grabbing">
          <img
            alt="Comment Flag"
            src={chrome.runtime.getURL('content-ui/comment-flag.svg')}
            className="pointer-events-none mr-5"
          />
        </pre>
        <AnimatePresence>
          {!isDragging && (
            <BounceBoundary helper={{ width: 400, height: 40 }} targetRef={pointerRef}>
              <motion.div initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }}>
                <CommentInput
                  className="rounded-md border"
                  onCreate={comment => {
                    onCreate({
                      comment,
                    });
                  }}
                />
              </motion.div>
            </BounceBoundary>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThreadInit;
