import type { RefObject } from 'react';
import { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * Element must have Id to catch events in ShadowElement
 */
export function useClickAway<T extends Element>(cb: (e: Event) => void): [RefObject<T>, Event] {
  const ref = useRef<T>(null);
  const refCb = useRef(cb);
  const customEvent = new CustomEvent('mousedown', { bubbles: true, composed: true, detail: ref.current?.id });
  const refEv = useRef(customEvent);

  useLayoutEffect(() => {
    refCb.current = cb;
    refEv.current = new CustomEvent('mousedown', { bubbles: true, composed: true, detail: ref.current?.id });
  });

  useEffect(() => {
    const handler = (e: CustomEvent | MouseEvent | TouchEvent) => {
      const element = ref.current;

      if (element && element.id !== e.detail) {
        refCb.current(e);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  return [ref, refEv.current];
}
