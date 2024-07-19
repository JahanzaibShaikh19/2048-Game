// src/components/gameLogic.js

export const initializeGrid = () => {
    const grid = Array.from({ length: 4 }, () => Array(4).fill(null));
    addRandomTile(grid);
    addRandomTile(grid);
    return grid;
  };
  
  export const addRandomTile = (grid) => {
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
      const newValue = Math.random() < 0.9 ? 2 : 4;
      grid[row][col] = newValue;
    }
  };
  
  export const slide = (grid, direction) => {
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
    }
  
    return { newGrid, moved };
  };
  
  export const canMove = (grid) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === null) return true;
        if (i < 3 && grid[i][j] === grid[i + 1][j]) return true;
        if (j < 3 && grid[i][j] === grid[i][j + 1]) return true;
      }
    }
    return false;
  };
  
  export const hasReached512 = (grid) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 512) return true;
      }
    }
    return false;
  };
  