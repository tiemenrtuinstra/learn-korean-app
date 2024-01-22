import React, { useState, useEffect } from 'react';
import words from '../database/words.json';
import { Button, Box, Typography, Alert, Snackbar, AlertColor, Grid, Divider, LinearProgress, styled, Theme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LinearProgressWithLabel } from '../components/LinearProgressWithLabel';
import { Card, CardContent, } from '@mui/material';


const MultipleChoice = () => {
  // Define a constant for the maximum number of questions
  const MAX_STREAK = 10;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const [streak, setStreak] = useState(0);

  const [options, setOptions] = useState<string[]>([]);
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [konamiCodeIndex, setKonamiCodeIndex] = useState(0);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to calculate color based on streak
  const calculateColor = (streak: number | undefined, maxStreak: number, theme: Theme) => {
    if (!streak || streak === 0) {
      return 'rgb(139, 0, 0)'; // return dark red if streak is zero or undefined
    }
    const percentage = streak / maxStreak;
    const red = Math.round((1 - percentage) * 139);
    const green = theme.palette.success.main; // use success green color from theme
    return `rgb(${red}, ${green}, 0)`;
  };

  // Create a styled LinearProgress component that changes color based on streak
  const StreakProgress = styled(LinearProgress)(({ theme, value }) => ({
    '& .MuiLinearProgress-bar': {
      backgroundColor: calculateColor(Math.round(value || 0), MAX_STREAK, theme),
      transition: theme.transitions.create(['backgroundColor', 'width']),
    },
  }));

  // Calculate progress percentage
  const progressPercentage = (streak / MAX_STREAK) * 100;

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
    setProgress((score / MAX_STREAK) * 100);
  }, [currentQuestion, score]);

  // Inside the question component
  useEffect(() => {
    const konamiCodeKeyboardCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === konamiCodeKeyboardCode[konamiCodeIndex]) {
        setKonamiCodeIndex((prevIndex) => prevIndex + 1);
      } else {
        setKonamiCodeIndex(0);
      }

      if (konamiCodeIndex + 1 === konamiCodeKeyboardCode.length) {
        window.alert('Konami Code entered!');
      }
    };

    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [konamiCodeIndex, setKonamiCodeIndex]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    // Check if the answer is correct
    if (answer === words[currentQuestion].dutch) {
      setAlert({ open: true, type: 'success', message: 'Correct!' });
      setScore(prevScore => prevScore + 1);
      setCorrectAnswers(prevCorrect => prevCorrect + 1);
      setStreak(prevStreak => prevStreak + 1);
    } else {
      setAlert({ open: true, type: 'error', message: 'Incorrect!' });
      setScore(prevScore => Math.max(prevScore - 1, 0)); // subtract a point for an incorrect answer, min 0

      // Update the number of wrong answers
      setWrongAnswers(prevWrong => prevWrong + 1);
      setStreak(0);
    }

    // Move to the next question or finish the quiz
    if (streak >= MAX_STREAK) {
      // Navigate to the finished page when the streak of 10 correct answers is met
      navigate(`/finished/${score}/${correctAnswers}/${wrongAnswers}`);
    } else if (currentQuestion < words.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
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
            <StreakProgress variant="determinate" value={progressPercentage} />
          </Box>
          <Typography>Wat is de correcte vertaling van: </Typography>
          <Typography variant="h3">{words[currentQuestion].hangul}</Typography>
          <Divider sx={{ margin: '1rem 0' }} />
          <Grid container justifyContent="center" spacing={2}>
            {
              options.map((option, index) => (
                <Grid item key={index} sm={6} xs={12}>
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    style={{
                      backgroundColor: konamiCodeIndex && option === words[currentQuestion].dutch ? 'green' : '',
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
      </Card>
    </Box>
  );
}

export default MultipleChoice;
