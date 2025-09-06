import React from 'react';
import { isNavigator } from '@/utils';

const getConnection = () =>
  isNavigator
    ? (navigator.connection ??
      navigator.mozConnection ??
      navigator.webkitConnection)
    : undefined;

function getConnectionState() {
  const isOnline = isNavigator ? navigator.onLine : false;
  const connection = getConnection();

  return {
    online: isOnline,
    rtt: connection?.rtt,
    downlink: connection?.downlink,
    downlinkMax: connection?.downlinkMax,
    type: connection?.type,
    effectiveType: connection?.effectiveType,
    saveData: connection?.saveData
  };
}

export function useNetworkState() {
  const [value, setValue] = React.useState(getConnectionState);

  React.useEffect(() => {
    const connection = getConnection();

    const options: AddEventListenerOptions = {
      passive: true
    };

    const listener = () => {
      setValue(getConnectionState);
    };

    window.addEventListener('online', listener, options);
    window.addEventListener('offline', listener, options);
    connection?.addEventListener('change', listener, options);

    return () => {
      window.removeEventListener('online', listener);
      window.removeEventListener('offline', listener);
      connection?.removeEventListener('change', listener);
    };
  }, []);

  return value;
}
