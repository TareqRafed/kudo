import type { Message } from '@kudo/shared';
import { sendMessage } from '@kudo/shared';
import { useQuery } from '@tanstack/react-query';

type QueryKeys = ['auth'] | ['threads', number] | ['comments'];

export const useSendMessage = <T extends Message>(message: T, key: QueryKeys = ['auth']) => {
  const query = useQuery({
    queryKey: key,
    queryFn: async () => {
      // const _key = key[0];
      const res = await sendMessage(message);
      return res;
    },
  });

  return query;
};
