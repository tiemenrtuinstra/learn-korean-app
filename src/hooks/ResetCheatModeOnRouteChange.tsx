import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useCheat from './useCheat';

const ResetCheatModeOnRouteChange: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [alert, setAlert] = useState({ open: false, type: '', message: '' });
    const location = useLocation();
    const { setCheatMode } = useCheat([], [], setAlert); // Replace arg1, arg2, arg3 with the actual arguments

    useEffect(() => {
        setCheatMode(0); // Reset cheatMode when location changes
    }, [location, setCheatMode]);

    return null;
};

export default ResetCheatModeOnRouteChange;
