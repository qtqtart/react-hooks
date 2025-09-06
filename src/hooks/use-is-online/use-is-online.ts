import { useNetworkState } from '../use-network-state/use-network-state';

export function useIsOnline() {
  const { online } = useNetworkState();
  return online;
}
