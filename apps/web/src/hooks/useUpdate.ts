import { useState } from 'react';

export type UpdateStatus = 'error' | 'ready' | 'loading' | 'success';

/**
 * Example usage of `useUpdate` for handling a network request and updating the status.
 *
 * ```tsx
 * const [updateStatus, update] = useUpdate();
 *
 * function handleWork() {
 *   // Do some network call that returns a promise
 *   update(() => {
 *     return fetchSomething(); // network call that returns a promise
 *   })
 *     .then((res) => {
 *       // Update UI or whatever with result
 *     })
 *     .catch((err) => {
 *       // Show error state
 *     });
 * }
 * ```
 */
export default function useUpdate({
  resetDelay = 1000,
}: {
  resetDelay?: number;
}): [UpdateStatus, <T>(fn: () => Promise<T>) => Promise<T>] {
  const [updateStatus, setUpdateStatus] = useState<UpdateStatus>('ready');

  const update = async <U>(updateFn: () => Promise<U>): Promise<U> => {
    setUpdateStatus('loading');

    return updateFn()
      .then(res => {
        setUpdateStatus('success');
        setTimeout(() => {
          setUpdateStatus('ready');
        }, resetDelay);
        return res;
      })
      .catch(err => {
        setUpdateStatus('error');
        throw err;
      });
  };

  return [updateStatus, update];
}
