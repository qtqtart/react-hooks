import clamp from "lodash-es/clamp";
import React from "react";

type Params = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export function useCounter({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
}: Params = {}) {
  const [count, setCount] = React.useState(() => clamp(initialValue, min, max));

  const isAtMin = count === min;
  const isAtMax = count === max;

  const increment = (value: number = 1) =>
    setCount((prevCount) => clamp(prevCount + value, min, max));

  const decrement = (value: number = 1) =>
    setCount((prevCount) => clamp(prevCount - value, min, max));

  const set = (value: number) => setCount(clamp(value, min, max));

  const reset = (value?: number) =>
    setCount(clamp(value ?? initialValue, min, max));

  return {
    count,
    isAtMin,
    isAtMax,
    increment,
    decrement,
    set,
    reset,
  };
}
