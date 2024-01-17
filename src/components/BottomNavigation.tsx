import React from 'react';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, CssBaseline, List, ListItemAvatar, ListItemButton, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import WordListIcon from '@mui/icons-material/FormatListBulleted';
import NumberListIcon from '@mui/icons-material/Filter1';
import ExerciseIcon from '@mui/icons-material/FitnessCenter';
import HangulIcon from '../assets/HangulIcon';
import TranslateIcon from '@mui/icons-material/Translate';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction component={Link} to="/alphabet" label="Alfabet" icon={<HangulIcon/>} />
                    <BottomNavigationAction component={Link} to="/word-list" label="Woorden" icon={<WordListIcon />} />
                    <BottomNavigationAction component={Link} to="/number-list" label="Nummers" icon={<NumberListIcon />} />
                    <BottomNavigationAction component={Link} to="/translate" label="Vertalen" value="translate" icon={<TranslateIcon />} />
                    <BottomNavigationAction component={Link} to="/exercises" label="Oefenining" icon={<ExerciseIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}