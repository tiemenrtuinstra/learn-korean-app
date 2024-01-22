// FinishedPage.tsx
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface FinishedPageProps {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const FinishedPage: React.FC<FinishedPageProps> = ({ score, correctAnswers, wrongAnswers }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card>
        <CardContent>
          <Typography variant="h4" align="center">Oefening afgerond!</Typography>
          <Typography variant="h5" align="center">Je hebt een streak-score van: <b>{score}</b>.</Typography>
          <Typography variant="h5" align="center">Je hebt <b>{correctAnswers}</b> vragen goed.</Typography>
          <Typography variant="h5" align="center">Je hebt <b>{wrongAnswers}</b> vragen fout.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FinishedPage;