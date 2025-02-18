import { type ForwardedRef, forwardRef, type MouseEventHandler } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserAvatar } from '../UserAvatar';
import { cn } from '@kudo/ui';
import { LoaderCircle } from 'lucide-react';

const CommentPin = (
  {
    isLoading,
    usersIds,
    content,
  }: {
    isLoading?: boolean;
    usersIds: number[];
    content?: string;
  },
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = e => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div ref={ref} className="flex">
      <pre>
        <motion.div
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          onMouseMove={handleMouseMove}
          className="bg-background hover:border-1 hover:outline-border dark flex cursor-pointer items-center justify-center rounded-full rounded-tl-none  border-2 hover:outline hover:outline-1"
          style={{
            position: 'relative',
            width: '32px',
            height: '32px',
            overflow: 'hidden',
            textAlign: 'center',
            color: 'white',
          }}>
          <span className="text-xs font-bold">
            {isLoading ? <LoaderCircle className="!size-3 animate-spin" /> : content}
          </span>
          <motion.div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '70px',
              height: '70px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',

              pointerEvents: 'none',
            }}
            initial={{ translateX: '-50%', translateY: '-50%' }}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </motion.div>
      </pre>
      <motion.div
        className="flex flex-row -space-x-4 px-1"
        whileHover={{ gap: '0.5rem' }} // Increases gap between avatars on hover
      >
        {[...new Set(usersIds)].map(id => (
          <UserAvatar userId={id} key={id} className={cn(['size-7'])} />
        ))}
      </motion.div>
    </div>
  );
};

export default forwardRef(CommentPin);
