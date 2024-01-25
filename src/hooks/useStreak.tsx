import { useState, useEffect } from 'react';

const MAX_STREAK = 10; // Replace with your actual max streak

export const useStreak = (correctAnswer: string) => {
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((streak / MAX_STREAK) * 100);
  }, [streak]);

  const handleAnswerClick = (answer: string) => {
    // Check if the answer is correct
    if (answer === correctAnswer) {
      setStreak((prevStreak) => prevStreak + 1);
    } else {
      setStreak(0);
    }
  };

  return { streak, progress, handleAnswerClick };
};

export default useStreak;