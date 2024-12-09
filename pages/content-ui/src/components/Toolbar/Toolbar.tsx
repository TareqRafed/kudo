import { sendMessage, useStorage, withSuspense } from '@extension/shared';
import { Button, cn, Tooltip, TooltipContent, TooltipTrigger } from '@extension/ui';
import { useHover } from '@src/hooks/useHover';
import { useSendMessage } from '@src/hooks/useSendMessage';
import useToolbarStore from '@src/store/toolbar';
import { AnimatePresence, motion } from 'framer-motion';
import { Edit2, Edit3, Inbox, MessageCircleMore, Pencil, TextCursor, TextQuote, User } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { GlobalStateStorage } from '@extension/storage';
import LoadingDots from '../LoadingDots/LoadingDots';

const Toolbar = () => {
  const { isLoggedIn } = useStorage(GlobalStateStorage);

  // const hoverRef = useRef<HTMLDivElement>(null);
  // const isHover = useHover(hoverRef)
  const [res, loading] = useSendMessage({ action: 'FETCH_DATA', payload: 'members' });
  console.log(JSON.stringify(res));

  return (
    <div className="pointer-events-none fixed top-5 z-[2147483645] flex w-full justify-center">
      <motion.div
        layout
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="bg-background dark pointer-events-auto flex h-12 items-center space-x-2 rounded-full border p-2">
        <AnimatePresence>
          {loading ? (
            <div className="px-5">
              <LoadingDots />
            </div>
          ) : (
            <ToolbarOptions />
          )}
        </AnimatePresence>

        {!loading && !isLoggedIn && (
          <ToolbarItem
            isActive={false}
            onClick={() => sendMessage({ action: 'REQUEST_LOGIN', payload: '' })}
            tooltipContent="Comment">
            <User size={10} />
          </ToolbarItem>
        )}
      </motion.div>
    </div>
  );
};

export default Toolbar;

const ToolbarOptions = () => {
  const { toggleToolbarItem, toolbar } = useToolbarStore();

  return (
    <>
      <ToolbarItem
        isActive={toolbar.comment.inUse}
        onClick={() => toggleToolbarItem('comment')}
        tooltipContent="Comment">
        <MessageCircleMore size={10} />
      </ToolbarItem>

      <ToolbarItem isActive={toolbar.comment.inUse} onClick={() => toggleToolbarItem('comment')} tooltipContent="Draw">
        <Pencil size={10} />
      </ToolbarItem>

      <ToolbarItem isActive={toolbar.comment.inUse} onClick={() => toggleToolbarItem('comment')} tooltipContent="Draw">
        <TextCursor size={10} />
      </ToolbarItem>

      <div className="h-full w-1 border"></div>

      <ToolbarItem isActive={toolbar.comment.inUse} onClick={() => toggleToolbarItem('comment')} tooltipContent="Inbox">
        <Inbox size={10} />
      </ToolbarItem>
    </>
  );
};

type ToolbarItemProps = {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
  tooltipContent: ReactNode;
};

const ToolbarItem = ({ isActive, onClick, children, tooltipContent }: ToolbarItemProps) => {
  return (
    <div className="relative flex items-center">
      <Tooltip>
        <TooltipTrigger>
          <Button
            size={'sx'}
            onClick={onClick}
            className={cn(['rounded-full', isActive && 'bg-primary'])}
            variant={'ghost'}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </div>
  );
};
