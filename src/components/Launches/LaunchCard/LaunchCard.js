import React, { Fragment, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction } from '../../../store/sagas/sagas';
import { getLaunches } from '../../../store/sagas/launchesSaga';

const LaunchCard = () => {
  const dispatch = useDispatch()
  const increment = useSelector((state) => state.increment)


  
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Text Title  {increment}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
           count
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default LaunchCard;