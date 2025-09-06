import type { Meta } from '@storybook/react-vite';
import { useNetworkState } from '.';

export default {
  title: 'Browser/useNetworkState/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const networkState = useNetworkState();

  return <p>{JSON.stringify(networkState)}</p>;
}
