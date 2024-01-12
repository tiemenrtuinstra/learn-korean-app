// FillInTheBlanks.tsx
import React, { useState } from 'react';
import words from './words.json';

const FillInTheBlanks = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOption === currentWord.hangul[charIndexToRemove]) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  const nextWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
    setSelectedOption('');
  };

  // Remove a random character from the Hangul word
  const charIndexToRemove = Math.floor(Math.random() * currentWord.hangul.length);
  const partialWord = currentWord.hangul.slice(0, charIndexToRemove) + '_' + currentWord.hangul.slice(charIndexToRemove + 1);

  return (
    <div>
      <p>Complete the following word in Hangul: {partialWord}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={selectedOption} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={nextWord}>Next word</button>
    </div>
  );
}

export default FillInTheBlanks;