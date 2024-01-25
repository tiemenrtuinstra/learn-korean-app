import { useState, useEffect } from 'react';

const useCheat = (konamiCodeKeyboardCode: string[], setAlert: Function) => {
  const [cheatMode, setCheatMode] = useState(0);

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
  }, [cheatMode, setCheatMode]);

  return { cheatMode, setCheatMode };
};

export default useCheat;