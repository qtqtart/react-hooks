import type { Meta } from '@storybook/react-vite';

import { useCounter } from '@/hooks/use-counter';

export default {
  title: 'State/useCounter/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const { value, isAtMax, isAtMin, increment, decrement, set, reset } =
    useCounter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content'
      }}
    >
      <p>value: {value}</p>
      <p>value is a max: {isAtMax ? 'true' : 'false'}</p>
      <p>value is a min: {isAtMin ? 'true' : 'false'}</p>

      <button type="button" onClick={() => increment()}>
        increment default
      </button>
      <button type="button" onClick={() => decrement()}>
        decrement default
      </button>
      <button type="button" onClick={() => set(10)}>
        set
      </button>
      <button type="button" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
}
