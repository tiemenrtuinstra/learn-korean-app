// Introduction.tsx
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Introduction = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4" color="primary" align="center">Welkom bij de Koreaanse taaltrainer!</Typography>
          <Typography align="center">Deze app is gemaakt om je te helpen met het leren van de Koreaanse taal.</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Introduction;