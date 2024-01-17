import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const exercises = [
  { id: 1, title: 'Exercise 1', link: '/exercise1' },
  { id: 2, title: 'Exercise 2', link: '/exercise2' },
  // Add more exercises as needed
];

const Exercise = () => {
  return (
    <Grid container spacing={3}>
      {exercises.map((exercise) => (
        <Grid item xs={12} sm={6} md={4} key={exercise.id}>
          <Card>
            <CardActionArea component={Link} to={exercise.link}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {exercise.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Exercise;