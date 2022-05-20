import React, { Fragment } from 'react';
import List from './List';
import { Container, Paper, Typography } from '@mui/material';
import LaunchCard from './LaunchCard/LaunchCard';

const Launches = ({title}) => {
  return (
    <Fragment>
      <Container>
        <Typography variant="h5">{title}</Typography>
        <Paper elevation={3}>
          <LaunchCard/>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default Launches;