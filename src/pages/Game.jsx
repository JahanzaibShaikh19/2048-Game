import React, { useState, useEffect, useRef } from 'react';
import Grid from '../components/Grid';
import Timer from '../components/Timer';
import useTimer from '../components/useTimer';
import { initializeGrid, slide, canMove, hasReached512 } from '../components/gameLogic';
import Hammer from 'hammerjs';
import Swal from 'sweetalert2';

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
          event.preventDefault();
          newGrid = slide(grid, 'up');
          break;
        case 'ArrowDown':
          event.preventDefault();
          newGrid = slide(grid, 'down');
          break;
        case 'ArrowLeft':
          event.preventDefault();
          newGrid = slide(grid, 'left');
          break;
        case 'ArrowRight':
          event.preventDefault();
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
          Swal.fire({
            title: 'Congratulations!',
            text: `You reached 512! Time: ${time}`,
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        } else if (!canMove(newGrid.newGrid)) {
          setGameOver(true);
          setIsTimerActive(false);
          Swal.fire({
            title: 'Game Over',
            text: `Your final time was: ${time}`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [grid, gameOver, gameWon, timerStarted, time]);
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
          Swal.fire({
            title: 'Congratulations!',
            text: `You reached 512! Time: ${time}`,
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        } else if (!canMove(newGrid.newGrid)) {
          setGameOver(true);
          setIsTimerActive(false);
          Swal.fire({
            title: 'Game Over',
            text: `Your final time was: ${time}`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      }
    });

    return () => {
      mc.off('swipe');
    };
  }, [grid, gameOver, gameWon, timerStarted, time]);

  return (
    <div className="flex flex-col items-center min-h-screen mt-5" ref={gameRef} style={{ backgroundColor: 'rgb(34, 33, 45)' }}>
      <Grid grid={grid} />
      <Timer time={time} />
      {/* Removed game over/won messages since they are now handled by SweetAlert2 */}
    </div>
  );
};

export default Game;
