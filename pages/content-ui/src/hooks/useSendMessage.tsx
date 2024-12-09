import type { ResponseType, Message } from '@extension/shared';
import { sendMessage } from '@extension/shared';
import { useEffect, useState } from 'react';

export const useSendMessage = <T extends Message>(message: T): [ResponseType<T> | undefined, boolean] => {
  const [res, setRes] = useState<ResponseType<T> | undefined>(undefined); // Explicit type
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    sendMessage(message)
      .then(data => setRes(data))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(message)]);

  return [res, loading];
};
