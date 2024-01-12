// SpeakingExercise.tsx
import React, { useEffect, useState } from 'react';
import words from '../words.json';

const SpeakingExercise = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = `${currentWord.dutch}, ${currentWord.hangul}`;
    utterance.lang = 'ko-KR'; // Korean language
    window.speechSynthesis.speak(utterance);
  }, [currentWord]);

  const nextWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
  };

  return (
    <div>
      <p>Listen and repeat: {currentWord.dutch}</p>
      <button onClick={nextWord}>Next word</button>
    </div>
  );
}

export default SpeakingExercise;