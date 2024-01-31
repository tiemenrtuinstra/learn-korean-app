import { useState, useEffect } from 'react';

const useSwipe = () => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    const touchStartHandler = (event: TouchEvent) => {
      setStartX(event.touches[0].clientX);
      setStartY(event.touches[0].clientY);
    };

    const touchEndHandler = (event: TouchEvent) => {
      const deltaX = event.changedTouches[0].clientX - startX;
      const deltaY = event.changedTouches[0].clientY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setDirection(deltaX > 0 ? 'right' : 'left');
      } else {
        setDirection(deltaY > 0 ? 'down' : 'up');
      }
    };

    window.addEventListener('touchstart', touchStartHandler);
    window.addEventListener('touchend', touchEndHandler);

    return () => {
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [startX, startY]);

  return direction;
};

export default useSwipe;