import React from "react";

export function useBoolean(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const set = (value: boolean) => setValue(value);

  const toggle = () => setValue((prevValue) => !prevValue);

  const reset = () => setValue(initialValue);

  return {
    value,
    set,
    toggle,
    reset,
  };
}
