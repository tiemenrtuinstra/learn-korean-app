
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export enum Severity {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export interface AlertCardProps {
  severity: Severity;
  title: string;
  content: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ severity, title, content }) => {

  return (
    <Card className={`alert alert-${severity}`} role="alert">
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent >
    </Card >
  );
};

export default AlertCard;