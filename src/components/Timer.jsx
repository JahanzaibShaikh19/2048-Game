// src/components/Timer.jsx

import React from 'react';

const Timer = ({ time }) => {
  return (
    <div className="mt-4 p-4 bg-gray-800 text-white text-lg rounded">
      Time: {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
    </div>
  );
};

export default Timer;
