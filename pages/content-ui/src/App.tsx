import { useEffect, useState } from 'react';
import { Button, cn } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import type { User } from '@supabase/supabase-js';
import { UserAvatar } from './components/UserAvatar';
import { MessageCircleMore } from 'lucide-react';
import { CommentLayer } from './components/CommentLayer';

const users = [
  { name: 'Tariq Rafid', email: 'tareq.rafed2@gmail.com' },
  { name: 'Tariq Rafid', email: 'tareq.rafed22@gmail.com' },
];
const colors = ['red-500', 'green-500', 'blue-500', 'yellow-500'];

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  const [user, setUser] = useState<User | null>();
  const [isCommenting, setIsCommenting] = useState<boolean>(false);

  useEffect(() => {
    chrome.runtime.sendMessage({ action: 'GET_USER' }, async (user: User | null) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <div className="comment-cursor bg-background dark fixed left-1/2 top-5 z-[2147483647] flex w-52 -translate-x-1/2 items-center justify-between rounded-md border-b px-5 py-2">
        <div className="flex items-center">
          <div className="flex -space-x-4">
            <UserAvatar className={cn(['hover:z-[10] relative'])} color={colors[0]} />
            {users.map((user, i) => (
              <UserAvatar className={cn(['hover:z-[10] relative'])} key={user.email} color={colors[i + 1]} />
            ))}
          </div>
        </div>
        <Button className="rounded-full" variant={'ghost'}>
          <MessageCircleMore />
        </Button>
      </div>
      <CommentLayer />
    </>
  );
}
