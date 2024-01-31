import React, { ReactNode, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import useCheat from './useCheat';

const ResetCheatModeOnRouteChange: React.FC = () => {

    const [alert, setAlert] = useState({ open: false, type: '', message: '' });
    const location = useLocation();
    const { setCheatMode } = useCheat([], [], setAlert); // Replace arg1, arg2, arg3 with the actual arguments

    useEffect(() => {
        setCheatMode(0); // Reset cheatMode when location changes
    }, [location, setCheatMode]);

    return null;
};

export default ResetCheatModeOnRouteChange;
