import type { Message } from '@extension/shared';
import { sendMessage } from '@extension/shared';
import { useQuery } from '@tanstack/react-query';

type QueryKeys = 'auth' | 'threads' | 'comments';

export const useSendMessage = <T extends Message>(message: T, key: QueryKeys = 'auth') => {
  const query = useQuery({
    queryKey: [key],
    queryFn: () => sendMessage(message),
  });

  return query;
};
