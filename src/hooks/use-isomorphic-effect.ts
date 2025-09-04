import React from "react";

export function useIsomorphicEffect() {
  return typeof document !== "undefined"
    ? React.useLayoutEffect
    : React.useEffect;
}
