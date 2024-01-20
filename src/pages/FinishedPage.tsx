// FinishedPage.tsx
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface FinishedPageProps {
  correctAnswers: number;
  wrongAnswers: number;
}

const FinishedPage: React.FC<FinishedPageProps> = ({ correctAnswers, wrongAnswers }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card>
        <CardContent>
          <Typography variant="h4" align="center">Quiz finished!</Typography>
          <Typography variant="h5" align="center">You answered <b>{correctAnswers}</b> questions correctly.</Typography>
          <Typography variant="h5" align="center">You answered <b>{wrongAnswers}</b> questions incorrectly.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FinishedPage;