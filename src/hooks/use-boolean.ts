import React from 'react';

export function useBoolean(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const actions = {
    set: (value: boolean) => setValue(value),
    toggle: () => setValue((prevValue) => !prevValue),
    reset: () => setValue(initialValue)
  };

  return {
    value,
    ...actions
  };
}
