import _clamp from 'lodash-es/clamp';
import React from 'react';

interface useCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

export function useCounter({
  initialValue = 0,
  min = -Infinity,
  max = Infinity
}: useCounterProps = {}) {
  const clamp = (value: number) => _clamp(value, min, max);
  const [value, setValue] = React.useState(() => clamp(initialValue));

  const isAtMin = value === min;
  const isAtMax = value === max;

  const actions = {
    increment: (value: number = 1) =>
      setValue((prevValue) => clamp(prevValue + value)),
    decrement: (value: number = 1) =>
      setValue((prevValue) => clamp(prevValue - value)),
    set: (value: number) => setValue(clamp(value)),
    reset: (value?: number) => setValue(clamp(value ?? initialValue))
  };

  return {
    value,
    isAtMin,
    isAtMax,
    ...actions
  };
}
