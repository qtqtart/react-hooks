import type { Meta } from '@storybook/react-vite';
import { useTimer } from '.';

export default {
  title: 'Effect/useTimer/Demo'
} as Meta<typeof Demo>;

export function Demo() {
  const { time, isRunning, runningProgress, start, pause, reset } = useTimer();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content'
      }}
    >
      <p>time: {time}</p>
      <p>isRunning: {isRunning ? 'true' : 'false'}</p>
      <p>runningProgress: {runningProgress}%</p>

      <button type="button" onClick={start}>
        start
      </button>
      <button type="button" onClick={pause}>
        pause
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
}
