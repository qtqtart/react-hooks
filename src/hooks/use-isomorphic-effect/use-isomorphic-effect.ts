import React from 'react';
import { isBrowser } from '@/utils';

export function useIsomorphicEffect() {
  return isBrowser ? React.useLayoutEffect : React.useEffect;
}
