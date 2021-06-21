import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '120%',
    maxWidth: 500,
    margin: 'auto',
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Typography align="center" variant="h4" gutterBottom>
      2021 IBM Accelerate Software Group #39: To-Do List
      </Typography> 

      <Typography align="center" variant="body1" gutterBottom>
        We created and included both the front and end of a to-do list web application by using React 
        , Material UI components, and Javascript. Allow the users to organize tasks.
      </Typography>

    </div>
  );
}
