import React from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  const handlerRef = React.useRef(handler);

  useIsomorphicEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;

      if (
        !(event.target instanceof Node) ||
        !element ||
        element.contains(event.target)
      ) {
        return;
      }

      handlerRef.current(event);
    };

    document.addEventListener('mousedown', listener, true);
    document.addEventListener('touchstart', listener, true);
    return () => {
      document.removeEventListener('mousedown', listener, true);
      document.removeEventListener('touchstart', listener, true);
    };
  }, []);
}
