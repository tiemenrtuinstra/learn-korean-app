// Introduction.tsx
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import AlertCard, { Severity } from '../components/AlertCard';

const Introduction = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography align="center">Deze app is gemaakt om je te helpen met het leren van de Koreaanse taal.</Typography>
        </CardContent>
      </Card>

      <AlertCard severity={Severity.Info} title="Hoe werkt het?" content="Deze app bevat verschillende oefeningen. Klik op de knop 'Oefeningen' om te beginnen." />
    </div>
  );
}

export default Introduction;