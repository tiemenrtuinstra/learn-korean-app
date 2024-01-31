import { useState, useEffect } from 'react';
import useSwipe from './useSwipe'; // Import useSwipe

const useCheat = (konamiCodeKeyboardCode: string[], konamiCodeSwipeDirections: string[], setAlert: Function) => {
  const [cheatMode, setCheatMode] = useState(0);
  const direction = useSwipe(); // Call useSwipe

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === konamiCodeKeyboardCode[cheatMode]) {
        setCheatMode((prevIndex) => prevIndex + 1);
      } else {
        setCheatMode(0);
      }

      if (cheatMode + 1 === konamiCodeKeyboardCode.length) {
        setAlert({ open: true, type: 'info', message: 'Cheating enabled!' });
      }
    };

    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [cheatMode, konamiCodeKeyboardCode, setAlert, setCheatMode]);

  useEffect(() => {
    if (direction === konamiCodeSwipeDirections[cheatMode]) {
      setCheatMode((prevIndex) => prevIndex + 1);
    } else {
      setCheatMode(0);
    }

    if (cheatMode + 1 === konamiCodeSwipeDirections.length) {
      setAlert({ open: true, type: 'info', message: 'Cheating enabled!' });
    }
  }, [cheatMode, direction, konamiCodeSwipeDirections, setAlert]); // Add a new effect that depends on direction

  return { cheatMode, setCheatMode };
};

export default useCheat;