import { Meta } from "@storybook/react-vite";

import { useBoolean } from "@/hooks/use-boolean";

export default {
  title: "State/useBoolean/Demo",
} as Meta<typeof Demo>;

export const Demo = () => {
  const { value, set, toggle, reset } = useBoolean();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <p>value: {value ? "true" : "false"}</p>

      <button onClick={() => set(true)}>set true</button>
      <button onClick={() => set(false)}>set false</button>
      <button onClick={() => toggle()}>toggle</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};
