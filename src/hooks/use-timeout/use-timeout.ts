import type { Timeout } from '@/types/timeout';
import React from 'react';
import { useEvent } from '../use-event';

export function useTimeout(callback: () => void, delay: number) {
  const [value, setValue] = React.useState(false);
  const timeoutIdRef = React.useRef<Timeout>(undefined);
  const memoizedCallback = useEvent(callback);

  React.useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      memoizedCallback();
      setValue(true);
    }, delay);

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, []);

  const clear = () => {
    clearTimeout(timeoutIdRef.current);
    setValue(true);
  };

  return {
    isReady: value,
    clear
  };
}
