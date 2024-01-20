import React, { useState, useEffect } from 'react';
import words from '../database/words.json';
import { Button, Box, Typography, Alert, Snackbar, AlertColor, Grid, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LinearProgressWithLabel } from '../components/LinearProgressWithLabel';
import { Card, CardContent, } from '@mui/material';


const MultipleChoice = () => {
  // Define a constant for the maximum number of questions
  const MAX_QUESTIONS = 10;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const [options, setOptions] = useState<string[]>([]);
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const navigate = useNavigate();
  // Generate options when the current question changes
  useEffect(() => {

    const shuffledWords = shuffleArray(words);
    const newOptions = [words[currentQuestion].dutch];
    while (newOptions.length < 4) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      if (!newOptions.includes(randomWord.dutch)) {
        newOptions.push(randomWord.dutch);
      }
    }
    setOptions(newOptions.filter(option => option !== undefined).sort(() => Math.random() - 0.5));
    setProgress((score / MAX_QUESTIONS) * 100);
  }, [currentQuestion, score]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    // Check if the answer is correct
    if (answer === words[currentQuestion].dutch) {
      setAlert({ open: true, type: 'success', message: 'Correct!' });
      setScore(prevScore => Math.min(prevScore + 1, 10)); // add a point for a correct answer, max 10

      setCorrectAnswers(prevCorrect => prevCorrect + 1);
    } else {
      setAlert({ open: true, type: 'error', message: 'Incorrect!' });
      setScore(prevScore => Math.max(prevScore - 1, 0)); // subtract a point for an incorrect answer, min 0

      // Update the number of wrong answers
      setWrongAnswers(prevWrong => prevWrong + 1);
    }

    // Move to the next question
    if (currentQuestion < Math.min(words.length, MAX_QUESTIONS) - 1) {

      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to the finished page when the quiz is finished
      navigate(`/finished/${correctAnswers}/${wrongAnswers}`);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card>
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
          <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
          </Box>
          <Typography>Wat is de correcte vertaling van: </Typography>
          <Typography variant="h3">{words[currentQuestion].hangul}</Typography>
          <Divider sx={{ margin: '1rem 0' }} />
          <Grid container justifyContent="center" spacing={2}>
            {
              options.map((option, index) => (
                <Grid item key={index} xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => handleAnswerClick(option)}
                    sx={{ width: '100%' }} // Add this line
                  >
                    {option}
                  </Button>
                </Grid>
              ))
            }
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MultipleChoice;