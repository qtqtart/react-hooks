import type { Timeout } from '@/types/timeout';
import React, { useEffect } from 'react';

enum ActionType {
  TICK = 'TICK',
  START = 'START',
  PAUSE = 'PAUSE',
  RESET = 'RESET'
}

type Action =
  | { type: ActionType.TICK }
  | { type: ActionType.START }
  | { type: ActionType.PAUSE }
  | { type: ActionType.RESET };

interface ReducerState {
  time: number;
  duration: number;
  isRunning: boolean;
}

function reducer(state: ReducerState, action: Action) {
  const { time, duration } = state;

  switch (action.type) {
    case ActionType.TICK:
      if (time + 1 >= duration) {
        return {
          ...state,
          time: duration,
          isRunning: false
        };
      }
      return {
        ...state,
        time: time + 1
      };
    case ActionType.START:
      return {
        ...state,
        isRunning: true
      };
    case ActionType.PAUSE:
      return {
        ...state,
        isRunning: false
      };
    case ActionType.RESET:
      return {
        ...state,
        time: 0,
        isRunning: false
      };
    default:
      return state;
  }
}

export function useTimer(initialDuration = 60) {
  const [state, dispatch] = React.useReducer(reducer, {
    time: 0,
    duration: Math.max(0, initialDuration),
    isRunning: false
  });

  const timeoutIdRef = React.useRef<Timeout>(undefined);

  useEffect(() => {
    if (state.isRunning) {
      timeoutIdRef.current = setInterval(() => {
        dispatch({ type: ActionType.TICK });
      }, 1000);
    } else if (timeoutIdRef.current) {
      clearInterval(timeoutIdRef.current);
    }

    return () => {
      if (timeoutIdRef.current) {
        clearInterval(timeoutIdRef.current);
      }
    };
  }, [state.isRunning]);

  return {
    time: state.time,
    isRunning: state.isRunning,
    runningProgress: (state.time / state.duration) * 100,
    start: () => dispatch({ type: ActionType.START }),
    pause: () => dispatch({ type: ActionType.PAUSE }),
    reset: () => dispatch({ type: ActionType.RESET })
  };
}
