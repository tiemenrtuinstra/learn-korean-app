import React, { useState, useEffect } from 'react';

interface ExerciseProps {
  question: string;
  answer: string;
}

interface ExerciseWrapperProps {
  ExerciseComponent: React.ComponentType<ExerciseProps>;
}

const ExerciseWrapper: React.FC<ExerciseWrapperProps> = ({ ExerciseComponent }) => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [achievements, setAchievements] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak >= 9) {
        setAchievements(achievements + 1);
      }
    } else {
      setStreak(0);
    }
    setProgress(progress + 1);
  };

  useEffect(() => {
    if (streak === 10) {
      setStreak(0);
      // Move to next exercise
    }
  }, [streak]);

  return (
    <div>
      <ExerciseComponent question="Question" answer="Answer" />
      <div>Score: {score}</div>
      <div>Progress: {progress}</div>
      <div>Achievements: {achievements}</div>
    </div>
  );
};

export default ExerciseWrapper;