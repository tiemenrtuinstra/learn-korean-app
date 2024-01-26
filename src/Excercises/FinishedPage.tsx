// FinishedPage.tsx
import { Card, CardContent, Typography } from '@mui/material';
import AlertCard, { Severity } from '../components/AlertCard';
import AlertLetter from '../components/AlertLetter';
import { Pie } from 'react-chartjs-2';

import { Chart, PieController, ArcElement, CategoryScale } from 'chart.js';
import { Colors } from '../App';

Chart.register(PieController, ArcElement, CategoryScale);

interface FinishedPageProps {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  cheatMode: Boolean;
}

const FinishedPage: React.FC<FinishedPageProps> = ({ score, correctAnswers, wrongAnswers, cheatMode }) => {
  const pieData = {
    labels: ['Correct Answers', 'Wrong Answers'],
    datasets: [
      {
        data: [correctAnswers, wrongAnswers],
        backgroundColor: [Colors.Green, Colors.Red],
      },
    ],
  };
  
  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 99, 132)', // Color of text
          boxWidth: 20, // Size of legend color box
          padding: 20, // Padding between legend items
          font: {
            size: 14, // Size of text
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: '50%',
  };
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center">Oefening afgerond!</Typography>
          <Typography variant="h5" align="center">Je hebt een streak-score van: <b><AlertLetter severity={Severity.Info} text={score.toString()} /></b>.</Typography>
          <Typography variant="h5" align="center">Je hebt <b><AlertLetter severity={Severity.Success} text={correctAnswers.toString()} /></b> vragen goed.</Typography>
          <Typography variant="h5" align="center">Je hebt <b><AlertLetter severity={Severity.Error} text={wrongAnswers.toString()} /></b> vragen fout.</Typography>
          <br />severity
          <Pie data={pieData} options={pieOptions} />
        </CardContent>
      </Card>
      {cheatMode && <AlertCard severity={Severity.Error} title="Ohh!!" content="Cheatmode staat <b>AAN</b>." />}
    </>
  );
};

export default FinishedPage;