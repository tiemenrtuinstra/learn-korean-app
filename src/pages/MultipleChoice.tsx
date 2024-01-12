import React, { useState, useEffect } from 'react';
import words from '../words.json';
import AlertBox from '../components/AlertBox';
import { Button, Box, Typography } from '@mui/material';

const MultipleChoice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });

  // Generate options when the current question changes
  useEffect(() => {
    const newOptions = [words[currentQuestion].dutch];
    while (newOptions.length < 4) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      if (!newOptions.includes(randomWord.dutch)) {
        newOptions.push(randomWord.dutch);
      }
    }
    setOptions(newOptions.sort(() => Math.random() - 0.5));
  }, [currentQuestion]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    // Check if the answer is correct
    if (answer === words[currentQuestion].dutch) {
      setAlert({ open: true, type: 'success', message: 'Correct!' });
    } else {
      setAlert({ open: true, type: 'error', message: 'Incorrect!' });
    }
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography variant="h4">Wat is de correcte vertaling van: {words[currentQuestion].hangul}</Typography>
      {options.map((option, index) => (
        <Button variant="outlined" onClick={() => handleAnswerClick(option)} key={index}>
          {option}
        </Button>
      ))}
      <AlertBox
        open={alert.open}
        type={alert.type as 'success' | 'error'}
        message={alert.message}
        onClose={() => setAlert(prev => ({ ...prev, open: false }))}
      />
    </Box>
  );
}

export default MultipleChoice;