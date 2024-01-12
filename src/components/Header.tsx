import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import headerImage from '../assets/header.jpeg'; // replace with your actual path

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Card style={{ maxHeight: '250px', marginBottom: '20px' }}>
      <CardMedia
        component="img"
        alt="Header"
        height="140"
        image={headerImage}
        title="Header"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Header;