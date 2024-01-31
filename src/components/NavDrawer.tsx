import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RoutesOptions from "../Routes";
import { RouteOption } from '../dto/types';

interface NavDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {

    return (
        <Drawer
            open={open}
            onClose={onClose}
        >
            <List>
                {RoutesOptions.filter((route: RouteOption) => !!route.inDrawer).map((route: RouteOption, index: number) => (
                    <ListItem button key={index} component={Link} to={route.path} onClick={onClose}>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText primary={route.title} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}