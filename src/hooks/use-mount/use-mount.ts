import { useEffectOnce } from '../use-effect-once';

export function useMount(callback: () => void) {
  useEffectOnce(() => {
    callback?.();
  });
}
