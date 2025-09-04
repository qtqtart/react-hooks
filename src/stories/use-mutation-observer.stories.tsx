import { Meta } from "@storybook/react-vite";
import { useRef, useState } from "react";

import { useMutationObserver } from "@/hooks/use-mutation-observer";

export default {
  title: "Element/useMutationObserver/Demo",
} as Meta<typeof Demo>;

export function Demo() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  const { disconnect } = useMutationObserver({
    targetRef,
    callback: () => setCount((prevCount) => prevCount + 1),
  });

  const addElement = () => {
    if (!targetRef.current) {
      return;
    }

    const element = document.createElement("div");
    element.style.width = "200px";
    element.style.height = "50px";
    element.style.margin = "5px";
    element.style.backgroundColor = "white";
    targetRef.current.appendChild(element);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <p>mutation count: {count}</p>
      <button onClick={addElement}>add</button>
      <button onClick={disconnect}>stop mutation observe</button>

      <div
        ref={targetRef}
        style={{
          minWidth: "200px",
          minHeight: "200px",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
}
