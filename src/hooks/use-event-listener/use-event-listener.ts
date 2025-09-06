import React from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

export function useEventListener<
  K extends keyof WindowEventMap,
  T extends HTMLElement = HTMLElement
>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: React.RefObject<T> | EventTarget,
  options?: AddEventListenerOptions | boolean
) {
  const handlerRef = React.useRef(handler);

  useIsomorphicEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const hasCurrent = element && 'current' in element;
    const targetElement = hasCurrent ? element.current : (element ?? window);

    if (!targetElement?.addEventListener) {
      return;
    }

    const listener = (event: Event) => {
      handlerRef.current(event as WindowEventMap[K]);
    };

    targetElement.addEventListener(eventName, listener, options);

    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}
