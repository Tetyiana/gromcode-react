import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOffline = () => {
      setStatus('offline');
    };

    const handleOnline = () => {
      setStatus('online');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={classNames('status', { 'status_offline': status === 'offline' })}>
      {status}
    </div>
  );
};

export default ConnectionStatus;



