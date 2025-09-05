import type { Meta } from '@storybook/react-vite';

import { useBoolean } from '@/hooks/use-boolean';

export default {
  title: 'State/useBoolean/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const { value, set, toggle, reset } = useBoolean();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content'
      }}
    >
      <p>value: {value ? 'true' : 'false'}</p>

      <button type="button" onClick={() => set(true)}>
        set true
      </button>
      <button type="button" onClick={() => set(false)}>
        set false
      </button>
      <button type="button" onClick={() => toggle()}>
        toggle
      </button>
      <button type="button" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
}
