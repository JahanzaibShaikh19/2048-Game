// src/components/Tile.jsx

import React from 'react';

const getTileColor = (value) => {
  switch (value) {
    case 2: return 'bg-gray-700';
    case 4: return 'bg-cyan-600';
    case 8: return 'bg-orange-700';
    case 16: return 'bg-yellow-700';
    case 32: return 'bg-red-400';
    case 64: return 'bg-purple-600';
    case 128: return 'bg-cyan-400';
    case 256: return 'bg-green-700';
    case 512: return 'bg-blue-700';
    default: return 'bg-gray-100';
  }
};

const Tile = ({ value }) => {
  return (
    <div className={`w-16 h-16 flex items-center justify-center rounded text-white text-lg font-bold ${getTileColor(value)}`}>
      {value}
    </div>
  );
};

export default Tile;
