// src/components/useTimer.js

import { useState, useEffect } from 'react';

const useTimer = (isActive) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  return time;
};

export default useTimer;
