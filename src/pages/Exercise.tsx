import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import RoutesOptions,{ RouteOption } from '../Routes';

const Exercise = () => {
  return (
    <Grid container spacing={3}>
      
      {RoutesOptions.filter((route: { isExercise: boolean; }) => route.isExercise).map((route: RouteOption) => (
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to={route.path}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {route.title}
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