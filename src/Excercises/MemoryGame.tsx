import React, { useEffect, useState } from 'react';
import randomisedWords from '../Words';
import { Button, Grid, Divider, CardContent, Card, Box } from '@mui/material';
import { shuffleArray } from '../helpers';

export const MemoryGame = () => {
    const [hangulOptions, setHangulOptions] = useState<string[]>([]);
    const [dutchOptions, setDutchOptions] = useState<string[]>([]);

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [cheatMode, setCheatMode] = useState(false);
    const [alert, setAlert] = useState({ open: false, type: 'success', message: '' });
    const [selectedHangulOption, setSelectedHangulOption] = useState<string | null>(null);
    const [selectedDutchOption, setSelectedDutchOption] = useState<string | null>(null);
    const [correctMatches, setCorrectMatches] = useState<string[]>([]);

    useEffect(() => {
        const hangul = randomisedWords.map(word => word.hangul).slice(0, 7);
        const dutch = randomisedWords.map(word => word.dutch).slice(0, 7);
        setHangulOptions(shuffleArray(hangul)); // Get the first 7 Hangul words
        setDutchOptions(shuffleArray(dutch)); // Get the first 7 Dutch words    

        // Check if the selected Hangul and Dutch options match
        if (selectedHangulOption && selectedDutchOption && selectedHangulOption === selectedDutchOption) {
            // Add the correct match to the correctMatches array
            setCorrectMatches(prevMatches => [...prevMatches, selectedHangulOption]);
        }
    }, [selectedHangulOption, selectedDutchOption]);

    const handleOptionClick = (option: string, language: string) => {
        if (language === 'hangul') {
            setSelectedOptions([option]);
        } else if (language === 'romanisation') {
            setSelectedOptions([option]);
        } else if (language === 'dutch') {
            setSelectedOptions([option]);
        }

    };

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOptions([]);
    };


    return (
        <>
            <Card className='max-width'>
                <CardContent>
                    <p>Match de volgende woorden:</p>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid container spacing={2}>

                            {hangulOptions.map((option, index) => (
                                <Grid item xs={12} sx={{ marginRight: 0.5 }}>
                                    <Button
                                        onClick={() => handleOptionClick(option, 'hangul')}
                                        disabled={correctMatches.includes(option)}
                                        color={correctMatches.includes(option) ? 'success' : 'primary'}
                                        variant='contained'
                                        sx={{ width: '100%', float: 'left' }}
                                        key={index}>
                                        {option}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container spacing={2} sx={{ marginLeft: 0.5 }}>
                            {dutchOptions.map((option, index) => (
                                <Grid item xs={12} sx={{ float: 'right' }}>
                                    <Button
                                        onClick={() => handleOptionClick(option, 'dutch')}
                                        disabled={correctMatches.includes(option)}
                                        color={correctMatches.includes(option) ? 'success' : 'primary'}
                                        variant='contained'
                                        sx={{ width: '100%', float: 'right' }}
                                        key={index}>
                                        {option}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Divider sx={{ margin: '1rem 0' }} />
                    <Button variant='contained' onClick={nextQuestion}>Volgende</Button>
                </CardContent>
            </Card>
        </>
    );
};

export default MemoryGame;