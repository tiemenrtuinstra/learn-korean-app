import React, { useState } from 'react';
import { Button, Card, Paper, Grid } from '@mui/material'; // Import the Grid component
import numbers from '../Numbers';
import NumberSystem from '../components/NumberSystem';

const NumberList = ({showRomanisation}: {showRomanisation: boolean}) => {
  const [selectedSystem, setSelectedSystem] = useState<'korean' | 'sino-korean'>('korean');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ marginBottom: '14px' }}>
      <Card component={Paper} className='max-width'
        sx={{ maxWidth: 800, margin: "auto", padding: "1rem 0px " }}>
        <Grid container justifyContent="center" spacing={2} style={{ padding: '0px 14px' }}>
          <Grid item sm={6} xs={12}>
            <Button
              variant="contained" size="medium"
              style={{ width: "100%" }}
              onClick={() => setSelectedSystem('korean')}
            >
              Koreaans
            </Button>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button
              variant="contained" size="medium"
              onClick={() => setSelectedSystem('sino-korean')}
              style={{ width: "100%" }}
            >
              Sino-Koreans
            </Button>
          </Grid>
        </Grid>
      </Card>

      {numbers &&
        <NumberSystem
          showRomanisation={showRomanisation}
          numbers={numbers}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          numberSystem={selectedSystem}
        />
      }
    </div>
  );
};

export default NumberList;