import React, { useState, useEffect } from 'react';
import words from '../database/words.json';
import { Button, Box, Typography, Alert, Snackbar, AlertColor, Grid, Divider, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, } from '@mui/material';
import useCheat from '../hooks/useCheat';

const MultipleChoice = () => {
  // Define a constant for the maximum number of questions
  const MAX_STREAK = 10;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);


  const konamiCodeKeyboardCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const { cheatMode, setCheatMode } = useCheat(konamiCodeKeyboardCode, setAlert);

  const [repeatQuestions, setRepeatQuestions] = useState<number[]>([]);

  const navigate = useNavigate();

  // Generate options when the current question changes
  useEffect(() => {

    const newOptions = [words[currentQuestion].dutch];
    while (newOptions.length < 4) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      if (!newOptions.includes(randomWord.dutch)) {
        newOptions.push(randomWord.dutch);
      }
    }
    setOptions(newOptions.filter(option => option !== undefined).sort(() => Math.random() - 0.5));
  }, [currentQuestion]);


  useEffect(() => {
    setProgress((streak / MAX_STREAK) * 100);
  }, [streak]);


  const handleAnswerClick = (answer: string, correctAnswer: string) => {
    setSelectedAnswer(answer);

    // Check if the answer is correct
    if (answer === correctAnswer) {
      // If the answer is correct, increment the streak and correctAnswers
      setScore(prevScore => prevScore + 1);
      setStreak(prevStreak => prevStreak + 1);
      setCorrectAnswers(prevCorrect => prevCorrect + 1);
      setProgress(prevProgress => prevProgress + 1);
    } else {
      // If the answer is wrong, reset the streak and increment wrongAnswers
      setScore(prevScore => prevScore - 1);
      setStreak(0);
      setWrongAnswers(prevWrong => prevWrong + 1);
      setProgress(0);

      // Add the current question to repeatQuestions
      setRepeatQuestions(prevRepeatQuestions => [...prevRepeatQuestions, currentQuestion]);
    }

    // If the current question is a repeated question, increment MAX_STREAK
    if (repeatQuestions.includes(currentQuestion)) {
      setMaxStreak(prevMaxStreak => prevMaxStreak + 1);
    }

    // Move to the next question or finish the quiz
    if (streak === MAX_STREAK) {
      // Navigate to the finished page when the streak of 10 correct answers is met
      navigate(`/finished/${score}/${correctAnswers}/${wrongAnswers}/${cheatMode}`);
    } else if (currentQuestion < words.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <Card className='max-width'>
        <CardContent>
          <Snackbar
            open={alert.open}
            autoHideDuration={6000}
            onClose={() => setAlert({ ...alert, open: false })}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              onClose={() => setAlert({ ...alert, open: false })}
              severity={alert.type as AlertColor}
              sx={{ width: '100%' }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
          <Typography variant="h4">Score: {score}</Typography>
          <Typography>Wat is de correcte vertaling van: </Typography>
          <Typography variant="h3">{words[currentQuestion].hangul}</Typography>
          <Divider sx={{ margin: '1rem 0' }} />
          <Grid container justifyContent="center" spacing={2}>
            {
              options.map((option, index) => (
                <Grid item key={index} sm={6} xs={12}>
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(option, words[currentQuestion].dutch)}
                    color={cheatMode && option === words[currentQuestion].dutch ? 'success' : 'primary'}
                    style={{
                      width: '100%'
                    }}
                    variant='contained'
                  >
                    {option}
                  </Button>
                </Grid>
              ))
            }
          </Grid>
        </CardContent>
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="success"
            style={{ backgroundColor: '#cfe8fc', height: '7px' }}
          />
        </Box>
      </Card>
    </>
  );
}

export default MultipleChoice;
