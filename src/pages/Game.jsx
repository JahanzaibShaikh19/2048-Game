import React, { useState, useEffect } from 'react';

const Game = () => {
  const initializeGrid = () => {
    const grid = Array.from({ length: 4 }, () => Array(4).fill(null));
    addRandomTile(grid);
    addRandomTile(grid);
    return grid;
  };

  const addRandomTile = (grid) => {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === null) {
          emptyCells.push({ row: i, col: j });
        }
      }
    }

    if (emptyCells.length > 0) {
      const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newValue = Math.random() < 0.9 ? 2 : 4; // 90% chance to add a 2, 10% chance to add a 4
      grid[row][col] = newValue;
    }
  };

  const [grid, setGrid] = useState(initializeGrid);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const slide = (grid, direction) => {
    let moved = false;
    let newGrid = grid.map(row => [...row]);

    const slideRow = (row) => {
      let newRow = row.filter(val => val !== null);
      for (let i = 0; i < newRow.length - 1; i++) {
        if (newRow[i] === newRow[i + 1]) {
          newRow[i] *= 2;
          newRow[i + 1] = null;
          moved = true;
        }
      }
      newRow = newRow.filter(val => val !== null);
      while (newRow.length < 4) newRow.push(null);
      return newRow;
    };

    const slideLeft = (grid) => {
      return grid.map(row => slideRow(row));
    };

    const slideRight = (grid) => {
      return grid.map(row => slideRow(row.reverse()).reverse());
    };

    const slideUp = (grid) => {
      let newGrid = [[], [], [], []];
      for (let j = 0; j < 4; j++) {
        let col = [];
        for (let i = 0; i < 4; i++) {
          if (grid[i][j] !== null) col.push(grid[i][j]);
        }
        col = slideRow(col);
        for (let i = 0; i < 4; i++) {
          newGrid[i][j] = col[i];
        }
      }
      return newGrid;
    };

    const slideDown = (grid) => {
      let newGrid = [[], [], [], []];
      for (let j = 0; j < 4; j++) {
        let col = [];
        for (let i = 0; i < 4; i++) {
          if (grid[i][j] !== null) col.push(grid[i][j]);
        }
        col = slideRow(col.reverse()).reverse();
        for (let i = 0; i < 4; i++) {
          newGrid[i][j] = col[i];
        }
      }
      return newGrid;
    };

    switch (direction) {
      case 'left':
        newGrid = slideLeft(grid);
        break;
      case 'right':
        newGrid = slideRight(grid);
        break;
      case 'up':
        newGrid = slideUp(grid);
        break;
      case 'down':
        newGrid = slideDown(grid);
        break;
      default:
        break;
    }

    if (JSON.stringify(newGrid) !== JSON.stringify(grid)) {
      moved = true;
      addRandomTile(newGrid);
      if (!canMove(newGrid)) {
        setGameOver(true);
      }
      if (hasReached512(newGrid)) {
        setGameWon(true);
      }
    }

    return newGrid;
  };

  const canMove = (grid) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === null) return true;
        if (i < 3 && grid[i][j] === grid[i + 1][j]) return true;
        if (j < 3 && grid[i][j] === grid[i][j + 1]) return true;
      }
    }
    return false;
  };

  const hasReached512 = (grid) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 512) return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver || gameWon) return;
      let newGrid;
      switch (event.key) {
        case 'ArrowUp':
          newGrid = slide(grid, 'up');
          break;
        case 'ArrowDown':
          newGrid = slide(grid, 'down');
          break;
        case 'ArrowLeft':
          newGrid = slide(grid, 'left');
          break;
        case 'ArrowRight':
          newGrid = slide(grid, 'right');
          break;
        default:
          return;
      }
      setGrid(newGrid);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [grid, gameOver, gameWon]);

  const getTileColor = (value) => {
    switch (value) {
      case 2:
        return 'bg-gray-700';
      case 4:
        return 'bg-cyan-600';
      case 8:
        return 'bg-orange-700';
      case 16:
        return 'bg-yellow-700';
      case 32:
        return 'bg-red-400';
      case 64:
        return 'bg-purple-600';
      case 128:
        return 'bg-cyan-400';
      case 256:
        return 'bg-green-700';
      case 512:
        return 'bg-blue-700';      
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-purple-700">
      <div className="grid grid-cols-4 gap-2 p-4 bg-gray-800 rounded-lg">
        {grid.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-16 h-16 flex items-center justify-center rounded text-white text-lg font-bold ${
                getTileColor(value)
              }`}
            >
              {value}
            </div>
          ))
        )}
      </div>
      {gameOver && (
        <div className="mt-4 p-4 bg-red-600 text-white text-lg rounded">
          Game Over
        </div>
      )}
      {gameWon && (
        <div className="mt-4 p-4 bg-green-600 text-white text-lg rounded">
          You Won!
        </div>
      )}
    </div>
  );
};

export default Game;
