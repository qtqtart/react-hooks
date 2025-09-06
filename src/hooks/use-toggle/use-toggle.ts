import React from 'react';

export function useToggle(initialValue = false) {
  const [value, toggle] = React.useReducer((state) => !state, initialValue);
  return { value, toggle };
}
