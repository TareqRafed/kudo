import type { Message } from '@kudo/shared';
import { sendMessage } from '@kudo/shared';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

export const useSendMessage = <T extends Message>(message: T, options?: UseQueryOptions) => {
  const query = useQuery({
    queryKey: [message],
    queryFn: async () => {
      // const _key = key[0];
      console.log(message.action);
      const res = await sendMessage(message);
      if (!res.success) throw new Error('Something went bad');
      return res;
    },
  });

  return query;
};
