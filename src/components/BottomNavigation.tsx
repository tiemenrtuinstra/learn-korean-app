import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, CssBaseline, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import WordListIcon from '@mui/icons-material/FormatListBulleted';
import NumberListIcon from '@mui/icons-material/Filter1';
import ExerciseIcon from '@mui/icons-material/FitnessCenter';
import HangulIcon from '../assets/HangulIcon';
import TranslateIcon from '@mui/icons-material/Translate';
import RoutesOptions, { isAnyRouteInDrawerEnabled } from "../Routes";
import { RouteOption } from '../dto/types';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TabBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const location = useLocation();


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <CssBaseline />
            <Paper className="bottomnavbar" sx={{ position: 'fixed', bottom: 7, left: 7, right: 7 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={location.pathname}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {RoutesOptions.filter((route: RouteOption) => !!route.inBottomNav).map((route: RouteOption) => (
                        <BottomNavigationAction sx={{ minWidth: "40px" }}
                            // label={route.title}
                            icon={route.icon}
                            component={Link}
                            to={route.path}
                            value={route.path}
                        />
                    ))}

                    <BottomNavigationAction
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        icon={<SettingsIcon />}
                        style={{ maxWidth: "30px" }}
                    />
                </BottomNavigation>
            </Paper>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {RoutesOptions.filter((route: RouteOption) => !!route.isSetting).map((route: RouteOption) => (
                    <MenuItem key={route.path} component="a" href={route.path} onClick={handleClose}>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText primary={route.title} />
                    </MenuItem>
                ))}
            </Menu>

        </>
    );
}