import React from 'react';

const DEFAULT_OPTIONS: MutationObserverInit = {
  attributes: true,
  childList: true,
  subtree: true
};

interface useMutationObserverProps<T extends HTMLElement = HTMLElement> {
  targetRef: React.RefObject<T | null>;
  callback: MutationCallback;
  options?: MutationObserverInit;
}

export function useMutationObserver<T extends HTMLElement = HTMLElement>({
  targetRef,
  callback,
  options = DEFAULT_OPTIONS
}: useMutationObserverProps<T>) {
  const observerRef = React.useRef<MutationObserver | null>(null);
  const prevTargetRef = React.useRef<T | null>(null);

  const disconnect = React.useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    if (targetRef.current !== prevTargetRef.current) {
      disconnect();
      prevTargetRef.current = targetRef.current;
    }

    observerRef.current = new MutationObserver(callback);
    observerRef.current.observe(targetRef.current, options);

    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, callback, options]);

  return { disconnect };
}
