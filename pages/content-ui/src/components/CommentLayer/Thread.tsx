import { Button, cn } from '@extension/ui';
import { AnimatePresence, motion } from 'framer-motion';
import Draggable from 'react-draggable';
import { UserAvatar } from '../UserAvatar';
import CommentPin from './CommentPin';
import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import type { Thread } from '@extension/shared';
import usePositionCalculator from './usePositionCalculator';

type ThreadProps = {
  data: Thread;
};

const ThreadTag = ({ data }: ThreadProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { position } = usePositionCalculator({
    x: data.x,
    y: data.y,
    rect: data.rect,
    targetSelector: data.targetSelector,
  });

  return (
    <Draggable>
      <div
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
        style={{ position: 'absolute', left: `${position.left}px`, top: `${position.top}px` }}
        className={cn([`pointer-events-auto flex flex-col select-none items-start`])}>
        <CommentPin />
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.2 }}>
              <div className="bg-background dark w-96 rounded border px-2 py-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <UserAvatar className={cn(['size-7'])} />
                    <span className="text-xs font-bold">{data.comments[0].creator.name}</span>
                  </div>
                  <Button variant={'ghost'} size={'sx'}>
                    <CheckIcon className="size-7" />
                  </Button>
                </div>
                <span className="text-sm">{data.comments[0].content}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Draggable>
  );
};

export default ThreadTag;
