import clamp from 'lodash-es/clamp';
import React from 'react';

interface UseCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

enum ActionType {
  SET = 'SET',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET'
}

type Action =
  | { type: ActionType.SET; payload: number }
  | { type: ActionType.INCREMENT; payload?: number }
  | { type: ActionType.DECREMENT; payload?: number }
  | { type: ActionType.RESET };

interface ReducerState {
  value: number;
  initialValue: number;
  min: number;
  max: number;
}

function reducer(state: ReducerState, action: Action) {
  const { value, initialValue, min, max } = state;

  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        value: clamp(action.payload, min, max)
      };
    case ActionType.INCREMENT:
      return {
        ...state,
        value: clamp(value + (action.payload ?? 1), min, max)
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        value: clamp(value - (action.payload ?? 1), min, max)
      };
    case ActionType.RESET:
      return {
        ...state,
        value: initialValue
      };
    default:
      return state;
  }
}

export function useCounter({
  initialValue = 0,
  min = -Infinity,
  max = Infinity
}: UseCounterProps = {}) {
  const [state, dispatch] = React.useReducer(reducer, {
    value: clamp(initialValue, min, max),
    initialValue: clamp(initialValue, min, max),
    min,
    max
  });

  return {
    value: state.value,
    isAtMin: state.value === min,
    isAtMax: state.value === max,
    set: (value: number) => dispatch({ type: ActionType.SET, payload: value }),
    increment: (value?: number) =>
      dispatch({ type: ActionType.INCREMENT, payload: value }),
    decrement: (value?: number) =>
      dispatch({ type: ActionType.DECREMENT, payload: value }),
    reset: () => dispatch({ type: ActionType.RESET })
  };
}
