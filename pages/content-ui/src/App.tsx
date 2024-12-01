import { useEffect, useState } from 'react';
import { Button, cn } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import type { User } from '@supabase/supabase-js';
import { UserAvatar } from './components/UserAvatar';
import { MessageCircleMore } from 'lucide-react';
import { CommentLayer } from './components/CommentLayer';
import useToolbarStore from './store/toolbar';
import { useHotkeys } from 'react-hotkeys-hook';
import { motion } from 'framer-motion';

const users = [
  { name: 'Tariq Rafid', email: 'tareq.rafed2@gmail.com' },
  { name: 'Tariq Rafid', email: 'tareq.rafed22@gmail.com' },
];
const colors = ['red-500', 'green-500', 'blue-500', 'yellow-500'];

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  const [user, setUser] = useState<User | null>();

  const { toggleToolbarItem, toolbar } = useToolbarStore();
  useHotkeys('ctrl+c', () => toggleToolbarItem('comment'));

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    chrome.runtime.sendMessage({ action: 'GET_USER' }, async (user: User | null) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ translateX: '-50%' }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="bg-background dark fixed left-1/2 top-5 z-[2147483647] flex w-40 items-center justify-between rounded-full border p-2">
        <div className="relative flex flex-col items-center">
          <Button
            onClick={() => toggleToolbarItem('comment')}
            className={cn(['rounded-full', toolbar.comment.inUse && 'bg-primary'])}
            variant={'ghost'}>
            <MessageCircleMore />
          </Button>
        </div>
      </motion.div>
      <div className="absolute left-[41%] top-8 z-[2147483647]">
        <div className="flex -space-x-4">
          <UserAvatar className={cn(['hover:z-[10] relative'])} color={colors[0]} />
          {users.map((user, i) => (
            <UserAvatar className={cn(['hover:z-[10] relative'])} key={user.email} color={colors[i + 1]} />
          ))}
        </div>
      </div>

      <CommentLayer />
    </>
  );
}
