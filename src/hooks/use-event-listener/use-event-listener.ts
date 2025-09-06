import React from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

export function useEventListener<
  K extends keyof WindowEventMap,
  T extends HTMLElement = HTMLElement
>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element: React.RefObject<T> | EventTarget = window,
  options?: AddEventListenerOptions | boolean
) {
  const handlerRef = React.useRef(handler);

  useIsomorphicEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const target = element && 'current' in element ? element.current : element;
    if (!(target && 'addEventListener' in target)) {
      return;
    }

    const listener = (event: Event) => {
      handlerRef.current(event as WindowEventMap[K]);
    };

    target.addEventListener(eventName, listener, options);

    return () => {
      target.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}
