import type { Message } from '@kudo/shared';
import { sendMessage } from '@kudo/shared';
import { GlobalStateStorage } from '@kudo/storage';
import { useQuery } from '@tanstack/react-query';

type QueryKeys = ['auth'] | ['thread', number] | ['comments'];

export const useSendMessage = <T extends Message>(message: T, key: QueryKeys = ['auth']) => {
  const query = useQuery({
    queryKey: key,
    queryFn: async () => {
      const _key = key[0];
      if (_key == 'auth') await GlobalStateStorage.appendTask({ name: _key });
      const res = await sendMessage(message);
      if (_key == 'auth') await GlobalStateStorage.deleteTask({ name: _key });
      return res;
    },
  });

  return query;
};
