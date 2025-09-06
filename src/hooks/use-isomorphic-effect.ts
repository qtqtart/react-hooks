import { isBrowser } from "@/utils";
import React from "react";

export function useIsomorphicEffect() {
  return isBrowser ? React.useLayoutEffect : React.useEffect;
}
