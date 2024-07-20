// src/components/Grid.jsx

import React from 'react';
import Tile from './Tile';

const Grid = ({ grid }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 bg-gray-800 rounded-lg   mt-52">
      {grid.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        ))
      )}
    </div>
  );
};

export default Grid;
