import React, { useEffect } from 'react';

export function useUnmount(callback: () => void) {
  const ref = React.useRef(callback);
  ref.current = callback;

  useEffect(() => () => ref.current());
}
