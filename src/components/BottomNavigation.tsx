import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import { Avatar, BottomNavigation, BottomNavigationAction, Box, CssBaseline, List, ListItemAvatar, ListItemButton, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import WordListIcon from '@mui/icons-material/FormatListBulleted';
import NumberListIcon from '@mui/icons-material/Filter1';
import ExerciseIcon from '@mui/icons-material/FitnessCenter';
import HangulIcon from '../assets/HangulIcon';
import TranslateIcon from '@mui/icons-material/Translate';
import RoutesOptions, { RouteOption } from "../Routes";

export default function TabBottomNavigation() {
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
                    {RoutesOptions.filter((route: { inBottomNav: boolean; }) => route.inBottomNav).map((route: RouteOption) => (
                        <BottomNavigationAction
                            label={route.title}
                            icon={route.icon}
                            component={Link}
                            to={route.path}
                        />
                    ))}
                </BottomNavigation>
            </Paper>
        </Box>
    );
}