// Introduction.tsx
import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Colofon = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Colofon
          </Typography>
          <Typography>Deze app is gemaakt om je te helpen met het leren van de Koreaanse taal.</Typography>
        </CardContent>
      </Card>
      <Card sx={{marginTop:2}}>
        <CardContent>
          <Typography variant="h4">
            <sup>&copy;</sup>{new Date().getFullYear()} Learn 한국
          </Typography>
          <Typography>Deze app is gemaakt als tool om de Koreaanse taal te leren alsmede een studie-project om kennis en vaardigheden met o.a. react/typescript te verbeteren.</Typography>
          <br/>
          <Button variant="contained" color="primary" href="https://github.com/tiemenrtuinstra/learn-korean-app.git">
            <GitHubIcon />&nbsp;&nbsp;learn-korean-app
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Colofon;