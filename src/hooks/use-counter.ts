import clamp from "lodash-es/clamp";
import React from "react";

type useCounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export function useCounter({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
}: useCounterProps = {}) {
  const [value, setValue] = React.useState(() => clamp(initialValue, min, max));

  const isAtMin = value === min;
  const isAtMax = value === max;

  const actions = {
    increment: (value: number = 1) =>
      setValue((prevValue) => clamp(prevValue + value, min, max)),
    decrement: (value: number = 1) =>
      setValue((prevValue) => clamp(prevValue - value, min, max)),
    set: (value: number) => setValue(clamp(value, min, max)),
    reset: (value?: number) => setValue(clamp(value ?? initialValue, min, max)),
  };

  return {
    value,
    isAtMin,
    isAtMax,
    ...actions,
  };
}
