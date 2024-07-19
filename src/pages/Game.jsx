// src/pages/Game.jsx

import React, { useState, useEffect } from 'react';
import Grid from '../components/Grid';
import Timer from '../components/Timer';
import useTimer from '../components/useTimer';
import { initializeGrid, slide, canMove, hasReached512 } from '../components/gameLogic';

const Game = () => {
  const [grid, setGrid] = useState(initializeGrid);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const time = useTimer(isTimerActive);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver || gameWon) return;

      if (!timerStarted) {
        setTimerStarted(true);
        setIsTimerActive(true);
      }

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

      if (newGrid.moved) {
        setGrid(newGrid.newGrid);
        if (hasReached512(newGrid.newGrid)) {
          setGameWon(true);
          setIsTimerActive(false);
        } else if (!canMove(newGrid.newGrid)) {
          setGameOver(true);
          setIsTimerActive(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [grid, gameOver, gameWon, timerStarted]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-purple-700">
      <Grid grid={grid} />
      <Timer time={time} />
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
