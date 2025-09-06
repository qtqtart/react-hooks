import React from 'react';
import { isBrowser } from '@/utils';

export const useIsomorphicEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;
