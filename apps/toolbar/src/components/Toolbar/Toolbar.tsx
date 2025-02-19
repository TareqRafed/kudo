import { sendMessage, useStorage } from '@kudo/shared';
import { Button, cn, Tooltip, TooltipPortal, TooltipContent, TooltipTrigger, KeyboardShortcut } from '@kudo/ui';
import useToolbarStore from '@src/store/toolbar';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { GlobalStateStorage } from '@kudo/storage';
import LoadingDots from '../LoadingDots/LoadingDots';
import type { DraggableEventHandler } from 'react-draggable';
import Draggable from 'react-draggable';
import { useHotkeys } from 'react-hotkeys-hook';
import { useDebounceValue } from 'usehooks-ts';
import { domHelper } from '@src/util';
import Logo from '../../../public/logo.svg';

const Toolbar = () => {
  const { tasks } = useStorage(GlobalStateStorage);
  const { setDragging } = useToolbarStore();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useDebounceValue(true, 500);

  useEffect(() => {
    setIsLoading(!tasks.isFree);
  }, [tasks.isFree, setIsLoading]);

  const [pos, setPos] = useState({ x: 10, y: 10 });
  const onDrop: DraggableEventHandler = (e, { x, y }) => {
    setPos({ x: 10, y: Math.min(Math.max(10, y), window.innerHeight - 20) });
    setDragging(false);
  };

  return (
    <Draggable position={pos} onDrag={() => setDragging(true)} onStop={onDrop} nodeRef={toolbarRef}>
      <span ref={toolbarRef} className="z-max-2 fixed left-0 top-0">
        <motion.div
          layout
          initial={{ scale: 1, y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{ delay: 0, type: 'tween', duration: 0.1 }}
          style={{ borderRadius: 50 }}
          className={cn([
            'min-h-10 overflow-hidden w-fit bg-background text-white dark pointer-events-auto flex justify-center items-center space-x-1 border p-1',
          ])}
        >
          <AnimatePresence>
            {isLoading ? (
              <motion.span layout className="px-4 py-1">
                <LoadingDots />
              </motion.span>
            ) : (
              <ToolbarOptions />
            )}
          </AnimatePresence>
        </motion.div>
      </span>
    </Draggable>
  );
};

export default Toolbar;

const ToolbarOptions = () => {
  const { toggleToolbarItem, reset, toolbarItems, toolbar: state } = useToolbarStore();
  const { isLoggedIn } = useStorage(GlobalStateStorage);
  useHotkeys('c', () => toggleToolbarItem('comment'));
  useHotkeys('esc', () => reset());

  if (!isLoggedIn) {
    return (
      <ToolbarItem
        disabled={state.isDragging}
        onClick={() => sendMessage({ action: 'REQUEST_LOGIN', payload: '' })}
        tooltipContent="Login in the dashboard"
        className="flex rounded-full"
      >
        <img src={Logo} className="size-5 mr-2" />
        <span className="ml-5 mb-1">Login to Continue</span>
        <ArrowRight className="ml-1 size-4" />
      </ToolbarItem>
    );
  }
  return (
    <motion.span layout>
      <ToolbarItem
        disabled={state.isDragging}
        isActive={toolbarItems.comment.inUse}
        onClick={() => toggleToolbarItem('comment')}
        tooltipContent={
          <>
            Comment <KeyboardShortcut shortcut="C" />
          </>
        }
      >
        <MessageCircle className={cn(['!size-4'])} />
      </ToolbarItem>
    </motion.span>
  );
};

type ToolbarItemProps = {
  isActive?: boolean;
  onClick: () => void;
  children: ReactNode;
  tooltipContent: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const ToolbarItem = ({ isActive = false, onClick, children, tooltipContent, ...rest }: ToolbarItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger disabled={rest.disabled} asChild>
        <Button
          onClick={onClick}
          className={cn(['size-7 p-1 rounded-full', isActive && 'border border-border bg-primary', rest.className])}
          variant={'ghost'}
          {...rest}
        >
          <motion.span className="flex justify-center items-center p-1" layout>
            {children}
          </motion.span>
        </Button>
      </TooltipTrigger>
      <TooltipPortal container={domHelper.getRoot()!}>
        <TooltipContent side="right">{tooltipContent}</TooltipContent>
      </TooltipPortal>
    </Tooltip>
  );
};
