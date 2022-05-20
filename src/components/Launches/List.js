import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Paper, Typography } from '@mui/material';
import LaunchCard from './LaunchCard/LaunchCard';

const List = ({title}) => {
  return (
    <Container>
      <Typography variant="h5">{title}</Typography>
      <Paper elevation={3}>
        <LaunchCard/>
      </Paper>
    </Container>
  );
};

export default List;