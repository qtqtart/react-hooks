import React from 'react';

enum ActionType {
  SET = 'SET',
  SET_TRUE = 'SET_TRUE',
  SET_FALSE = 'SET_FALSE',
  TOGGLE = 'TOGGLE',
  RESET = 'RESET'
}

type Action =
  | { type: ActionType.SET; payload: boolean }
  | { type: ActionType.SET_TRUE }
  | { type: ActionType.SET_FALSE }
  | { type: ActionType.TOGGLE }
  | { type: ActionType.RESET };

interface ReducerState {
  value: boolean;
  initialValue: boolean;
}

function reducer(state: ReducerState, action: Action) {
  const { value, initialValue } = state;

  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        value: action.payload
      };
    case ActionType.SET_TRUE:
      return {
        ...state,
        value: true
      };
    case ActionType.SET_FALSE:
      return {
        ...state,
        value: false
      };
    case ActionType.TOGGLE:
      return {
        ...state,
        value: !value
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

export function useBoolean(initialValue = false) {
  const [state, dispatch] = React.useReducer(reducer, {
    value: initialValue,
    initialValue
  });

  return {
    value: state.value,
    set: (value: boolean) => dispatch({ type: ActionType.SET, payload: value }),
    setTrue: () => dispatch({ type: ActionType.SET_TRUE }),
    setFalse: () => dispatch({ type: ActionType.SET_FALSE }),
    toggle: () => dispatch({ type: ActionType.TOGGLE }),
    reset: () => dispatch({ type: ActionType.RESET })
  };
}
