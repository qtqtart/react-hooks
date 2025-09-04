import { Meta } from "@storybook/react-vite";

import { useCounter } from "@/hooks/use-counter";

export default {
  title: "State/useCounter/Demo",
} as Meta<typeof Demo>;

export const Demo = () => {
  const { count, isAtMax, isAtMin, increment, decrement, set, reset } =
    useCounter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <p>value: {count}</p>
      <p>value is a max: {isAtMax ? "true" : "false"}</p>
      <p>value is a min: {isAtMin ? "true" : "false"}</p>

      <button onClick={() => increment()}>increment default</button>
      <button onClick={() => decrement()}>decrement default</button>
      <button onClick={() => set(10)}>set</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};
