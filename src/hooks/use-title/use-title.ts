import React from 'react';
import { isBrowser } from '@/utils';
import { useUnmount } from '../use-unmount';

export function useTitle(title: string, restoreOnUnmount = false) {
  const prevTitleRef = React.useRef(isBrowser ? document.title : '');

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  useUnmount(() => {
    if (restoreOnUnmount) {
      document.title = prevTitleRef.current;
    }
  });
}
