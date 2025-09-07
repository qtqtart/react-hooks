import React from 'react';

export function useTime() {
  const [value, setValue] = React.useState(() => new Date());

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setValue(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return value;
}
