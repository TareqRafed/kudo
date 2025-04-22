import { AnimatePresence, motion } from 'framer-motion';
import { useRef, type ComponentPropsWithoutRef } from 'react';
import CommentInput from './CommentInput';
import { cn } from '@kudo/ui';
import BounceBoundary from '../BounceBoundary/BounceBoundary';
import CommentPin from './CommentPin';
import { useSendMessage } from '@src/hooks/useSendMessage';

type CallbackCreationParams = { comment: string };

interface ThreadInitProps extends ComponentPropsWithoutRef<'div'> {
  onCreate: (val: CallbackCreationParams) => void;
  isDragging?: boolean;
}

const ThreadInit = ({ onCreate, isDragging }: ThreadInitProps) => {
  const pointerRef = useRef<HTMLPreElement>(null);
  const { data: userResponse } = useSendMessage({
    action: 'RPC',
    payload: 'get_current_member_with_metadata',
    args: {},
  });
  const user = userResponse?.data?.data?.[0];
  return (
    <div>
      {/* TODO: Handle `e.stopPropagation` */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: stopPropagation should be removed or at least inverse dep, it's used because it causes issues with <Magnet /> */}
      <div
        aria-hidden
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'absolute', left: 0, top: 0 }}
        className={cn(['pointer-events-auto forth-index bg-transparent items-start flex select-none'])}
      >
        <pre ref={pointerRef} className="cursor-grab active:cursor-grabbing">
          <CommentPin
            avatars={[{ profilePicture: user?.profile_picture ?? '', color: user?.color ?? '' }]}
            content=""
          />
        </pre>
        <AnimatePresence>
          {!isDragging && (
            <BounceBoundary helper={{ width: 400, height: 40 }} targetRef={pointerRef}>
              <motion.div
                className="dark text-white"
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
              >
                <CommentInput
                  className="rounded-md border"
                  onCreate={(comment) => {
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
