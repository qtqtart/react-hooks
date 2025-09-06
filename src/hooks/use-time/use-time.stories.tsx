import type { Meta } from '@storybook/react-vite';
import { useTime } from '.';

export default {
  title: 'State/useTime/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const time = useTime();

  return <p>{time.toISOString()}</p>;
}
