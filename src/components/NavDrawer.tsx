import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { getRoutesOptions } from "../Routes";
import { RouteOption } from '../dto/types';

interface NavDrawerProps {
    open: boolean;
    onClose: () => void;
}

interface NavDrawerProps {
    open: boolean;
    onClose: () => void;
    showRomanisation: boolean; // Added missing property
    setShowRomanisation: (value: boolean) => void; // Added missing property
}

export default function NavDrawer({ open, onClose, showRomanisation, setShowRomanisation }: NavDrawerProps) {

    return (
        <Drawer
            open={open}
            onClose={onClose}
        >
            <List>
                {getRoutesOptions(showRomanisation,setShowRomanisation).filter((route: RouteOption) => !!route.inDrawer).map((route: RouteOption, index: number) => (
                    <ListItem button key={index} component={Link} to={route.path} onClick={onClose}>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText primary={route.title} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}