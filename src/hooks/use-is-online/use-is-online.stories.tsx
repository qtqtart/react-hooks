import type { Meta } from '@storybook/react-vite';
import { useIsOnline } from '.';

export default {
  title: 'Browser/useIsOnline/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const isOnline = useIsOnline();

  return <p>{isOnline ? 'true' : 'false'}</p>;
}
