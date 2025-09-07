import React from 'react';

export function useEvent<Params extends unknown[], Return>(
  callback: (...args: Params) => Return
) {
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;

  return React.useCallback(
    (...args: Params) => callbackRef.current(...args),
    []
  );
}
