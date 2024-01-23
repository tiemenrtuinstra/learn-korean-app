
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export enum AlertType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export interface AlertCardProps {
  alertType: AlertType;
  title: string;
  text: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ alertType, title, text }) => {

  return (
    <Card className={`alert alert-${alertType}`} role="alert">
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </CardContent >
    </Card >
  );
};

export default AlertCard;