import { sendMessage, useStorage } from '@extension/shared';
import { Button, cn, Tooltip, TooltipContent, TooltipTrigger } from '@extension/ui';
import useToolbarStore from '@src/store/toolbar';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Inbox, MessageCircleMore } from 'lucide-react';
import { useRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { GlobalStateStorage } from '@extension/storage';
import LoadingDots from '../LoadingDots/LoadingDots';
import { useHover } from '@src/hooks/useHover';
import { useDebounce } from '@uidotdev/usehooks';

const DELAY = 0.5;
const DURATION = 0.3;

const Toolbar = () => {
  const { tasks, isLoggedIn } = useStorage(GlobalStateStorage);
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHovering = useHover(hoverRef);
  const isLoading = !useDebounce(tasks.isFree, 50);

  const isExpanded = isHovering || !isLoggedIn || isLoading;

  return (
    <div className="pointer-events-none fixed top-5 z-[2147483645] flex w-full justify-center">
      <motion.div
        ref={hoverRef}
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        }}
        layout
        transition={{ duration: DURATION, delay: 0, ease: 'easeIn' }}
        className={cn([
          isExpanded ? 'py-2 rounded-[1em] min-w-[3em] min-h-[2.2em]' : 'py-1 rounded-[0.5em]',
          'overflow-hidden w-fit bg-background text-white dark pointer-events-auto flex items-center space-x-1 border py-1 px-2',
        ])}>
        <AnimatePresence>{isLoading ? <LoadingDots /> : <ToolbarOptions expanded={isExpanded} />}</AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Toolbar;

const ToolbarOptions = ({ expanded }: { expanded: boolean }) => {
  const { toggleToolbarItem, toolbar } = useToolbarStore();
  const { isLoggedIn } = useStorage(GlobalStateStorage);

  if (!isLoggedIn) {
    return (
      <ToolbarItem
        expanded
        isActive={toolbar.comment.inUse}
        onClick={() => sendMessage({ action: 'REQUEST_LOGIN', payload: '' })}
        tooltipContent="Go to Dashboard"
        className="flex w-full ">
        Login to Continue <ArrowRight />
      </ToolbarItem>
    );
  }
  return (
    <motion.span
      className="flex w-full"
      layout="position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <ToolbarItem
        isActive={toolbar.comment.inUse}
        onClick={() => toggleToolbarItem('comment')}
        tooltipContent="Comment"
        expanded={expanded}>
        <MessageCircleMore className={cn([expanded ? '!size-4' : '!size-3'])} />
      </ToolbarItem>

      {expanded && (
        <motion.div
          className="hidden"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: DURATION, delay: DELAY },
          }}>
          <ToolbarItem
            expanded={expanded}
            isActive={toolbar.inbox.inUse}
            onClick={() => toggleToolbarItem('inbox')}
            tooltipContent="Inbox">
            <Inbox className={cn([expanded ? '!size-4' : '!size-3'])} />
          </ToolbarItem>
        </motion.div>
      )}
    </motion.span>
  );
};

type ToolbarItemProps = {
  isActive?: boolean;
  onClick: () => void;
  children: ReactNode;
  tooltipContent: ReactNode;
  expanded?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const ToolbarItem = ({ expanded, isActive = false, onClick, children, tooltipContent, ...rest }: ToolbarItemProps) => {
  return (
    <motion.div layout transition={{ ease: 'easeIn' }} className={cn(['relative flex items-center'])}>
      <Tooltip>
        <TooltipTrigger>
          <Button
            size={expanded ? 'sm' : 'xs'}
            onClick={onClick}
            className={cn(['rounded-full', isActive && 'bg-primary', rest.className])}
            variant={'ghost'}>
            <motion.span className="flex" layout>
              {children}
            </motion.span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
