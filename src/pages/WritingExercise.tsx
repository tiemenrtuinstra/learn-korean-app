// WritingExercise.tsx
import React, { useRef, useEffect, useState } from 'react';
import words from '../words.json';

const WritingExercise = () => {
  const [currentWord, setCurrentWord] = useState(words[0].dutch);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let drawing = false;

    const startDrawing = (event: MouseEvent) => {
      drawing = true;
      draw(event);
    };

    const stopDrawing = () => {
      drawing = false;
      context.beginPath();
    };

    const draw = (event: MouseEvent) => {
      if (!drawing) return;
      context.lineWidth = 10;
      context.lineCap = 'round';
      context.strokeStyle = 'black';
      context.lineTo(event.clientX, event.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX, event.clientY);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, []);

  const nextWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex].dutch);
  };

  return (
    <div>
      <p>Translate the following word to Hangul and write it down: {currentWord}</p>
      <button onClick={nextWord}>Next word</button>
      <canvas ref={canvasRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}

export default WritingExercise;