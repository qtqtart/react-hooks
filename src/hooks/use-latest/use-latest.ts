import React from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

export function useLatest<T>(value: T) {
  const ref = React.useRef(value);

  useIsomorphicEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
