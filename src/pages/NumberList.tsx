import React, { useState } from 'react';
import { Button, Box, Card, Paper } from '@mui/material';
import numbers, { Number, NumberListProps } from '../Numbers';
import NumberSystem from '../components/NumberSystem';

const NumberList = () => {
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
    <div>
      <Card component={Paper}
        sx={{ maxWidth: 800, margin: "auto", padding: "1rem 0px " }}>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            onClick={() => setSelectedSystem('korean')}
          >
            Go to Korean Numbers
          </Button>
          <Button
            variant="contained"
            onClick={() => setSelectedSystem('sino-korean')}
            style={{ marginLeft: "1rem" }}
          >
            Go to Sino-Korean Numbers
          </Button>
        </Box>
      </Card>

      {numbers &&
        <NumberSystem
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