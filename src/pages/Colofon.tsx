// Introduction.tsx
import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlined from '@mui/icons-material/EmailOutlined';

const Colofon = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Colofon
          </Typography>
          <Typography>
            Er was eens een jonge programmeur genaamd Tiemen die gefascineerd was door de Koreaanse cultuur.
            Hij hield van de muziek, de films, het eten en de mensen.
            Hij wilde graag Koreaans leren en schreef zich in voor een online taalklas van EduKimchi,
            een platform voor het leren van Koreaans. Hij besloot om zelf een app te maken om hem te helpen met het leren van de Koreaanse taal.<br />
            Hij gebruikte react/typescript om de app te bouwen, want dat waren de technologieën die hij het beste kende. Hij leerde veel over de grammatica,
            de uitspraak, het schrift en de woordenschat van het Koreaans. Hij maakte de app interactief, leuk en uitdagend. Hij voegde ook een quiz, een
            woordenboek en een spraakherkenning toe.<br /><br />
            Hij was erg trots op zijn app en hij deelde het met zijn vrienden en familie. Ze waren allemaal onder de indruk van zijn creativiteit en zijn passie.
            Ze probeerden ook de app te gebruiken om Koreaans te leren. Ze vonden het erg leuk en leerzaam.<br /><br />
            Tiemen kreeg de kans om in de zomer van 2023 naar de wereld jamboree in Korea te gaan. Hij was erg enthousiast
            om zijn app te gebruiken om met de lokale bevolking te communiceren. Hij ontmoette veel interessante mensen
            en maakte nieuwe vrienden. Hij genoot van de cultuur, de natuur en de avonturen. Hij was erg blij dat hij Koreaans had geleerd.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography>Ben je een van mijn mede studenten van EduKimchi, van de organisatie van EduKimchi, of wil je gewoon graag meehelpen. Dat kan altijd!</Typography>
          <Button variant="contained" color="primary" target="_blank" href="https://github.com/tiemenrtuinstra/learn-korean-app.git">
            <GitHubIcon />&nbsp;&nbsp;learn-korean-app
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography>Wil je mij voorzien van meer woordenlijsten.</Typography>
          <Button variant="contained" color="primary" target="_blank" href="mailto:tiemen@tuinstra.family?subject=[learn 한국 app] Woordenlijst aanleveren">
            <EmailOutlined />&nbsp;&nbsp;
            Woordenlijst
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="subtitle2">
            <sup>&copy;</sup>{new Date().getFullYear()} Learn 한국 <small> ontwikkeld door TiemenRTuinstra</small>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Colofon;