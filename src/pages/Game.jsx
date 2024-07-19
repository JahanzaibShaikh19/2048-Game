import React, { useState, useEffect, useRef } from 'react';
import Grid from '../components/Grid';
import Timer from '../components/Timer';
import useTimer from '../components/useTimer';
import { initializeGrid, slide, canMove, hasReached512 } from '../components/gameLogic';
import Hammer from 'hammerjs';

const Game = () => {
  const [grid, setGrid] = useState(initializeGrid);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const time = useTimer(isTimerActive);
  const gameRef = useRef(null);

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

  useEffect(() => {
    const element = gameRef.current;
    const mc = new Hammer(element);

    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    mc.on('swipe', (event) => {
      if (gameOver || gameWon) return;

      if (!timerStarted) {
        setTimerStarted(true);
        setIsTimerActive(true);
      }

      let newGrid;
      switch (event.direction) {
        case Hammer.DIRECTION_UP:
          newGrid = slide(grid, 'up');
          break;
        case Hammer.DIRECTION_DOWN:
          newGrid = slide(grid, 'down');
          break;
        case Hammer.DIRECTION_LEFT:
          newGrid = slide(grid, 'left');
          break;
        case Hammer.DIRECTION_RIGHT:
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
    });

    return () => {
      mc.off('swipe');
    };
  }, [grid, gameOver, gameWon, timerStarted]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-purple-700" ref={gameRef}>
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
