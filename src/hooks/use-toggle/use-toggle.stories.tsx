import type { Meta } from '@storybook/react-vite';

import { useToggle } from '.';

export default {
  title: 'State/useToggle/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const { value, toggle } = useToggle();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content'
      }}
    >
      <p>value: {value ? 'true' : 'false'}</p>
      <button type="button" onClick={toggle}>
        toggle
      </button>
    </div>
  );
}
