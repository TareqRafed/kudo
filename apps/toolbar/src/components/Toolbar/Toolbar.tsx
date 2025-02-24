import { sendMessage } from '@kudo/shared';
import { Button, KeyboardShortcut, Tooltip, TooltipContent, TooltipPortal, TooltipTrigger, cn } from '@kudo/ui';
import { useSendMessage } from '@src/hooks/useSendMessage';
import useToolbarStore from '@src/store/toolbar';
import { domHelper } from '@src/util';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { type ComponentPropsWithoutRef, type ReactNode, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import Logo from '../../../public/logo.svg';
import LoadingDots from '../LoadingDots/LoadingDots';

const TOOLBAR_DRAG_AREA_PADDING = 10;

const Toolbar = () => {
  const { isLoading } = useSendMessage({ action: 'GET_AUTH' });
  const { setDragging } = useToolbarStore();

  const [toolbarRef, animate] = useAnimate();
  const onDrop = ({ x, y }: { x: number; y: number }) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const toolbarWidth = toolbarRef.current?.offsetWidth || 0;
    const toolbarHeight = toolbarRef.current?.offsetHeight || 0;

    const newX =
      x < screenWidth / 2 ? TOOLBAR_DRAG_AREA_PADDING : screenWidth - toolbarWidth - TOOLBAR_DRAG_AREA_PADDING;
    const newY = Math.min(
      Math.max(TOOLBAR_DRAG_AREA_PADDING, y),
      screenHeight - toolbarHeight - TOOLBAR_DRAG_AREA_PADDING,
    );

    animate(toolbarRef.current, { x: newX, y: newY }, { duration: 0.3 });
    setDragging(false);
  };

  return (
    <span className="z-max-2 fixed left-0 top-0">
      <motion.div
        ref={toolbarRef}
        drag
        onDragStart={() => setDragging(true)}
        onDragEnd={(_, info) => onDrop(info.point)}
        style={{
          y: TOOLBAR_DRAG_AREA_PADDING,
          x: TOOLBAR_DRAG_AREA_PADDING,
          borderRadius: 50,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileDrag={{ scale: 0.9 }}
        whileTap={{
          scale: 0.98,
        }}
        className={cn([
          'min-h-10 overflow-hidden w-fit bg-background text-white dark pointer-events-auto flex justify-center items-center space-x-1 border p-1',
        ])}
        layout
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
  );
};

export default Toolbar;

const ToolbarOptions = () => {
  const { toggleToolbarItem, reset, toolbarItems, toolbar: state } = useToolbarStore();
  const { data } = useSendMessage({ action: 'GET_AUTH' });
  useHotkeys('c', () => toggleToolbarItem('comment'));
  useHotkeys('esc', () => reset());

  const isLoggedIn = data?.success;
  if (!isLoggedIn) {
    return (
      <ToolbarItem
        disabled={state.isDragging}
        onClick={() => sendMessage({ action: 'REQUEST_LOGIN', payload: '' })}
        tooltipContent="Login in the dashboard"
        className="flex rounded-full"
      >
        <img src={Logo} className="size-5 mr-2" alt="Kudo Logo" />
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
            Comment <KeyboardShortcut>C</KeyboardShortcut>
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
        <TooltipContent className="dark" side="right">
          {tooltipContent}
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  );
};
