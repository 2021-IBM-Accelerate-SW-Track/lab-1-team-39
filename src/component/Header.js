import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '100%',
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h4" gutterBottom>
      <h3>2021 IBM Accelerate Software Group #39: To-Do List</h3>
      </Typography> 
      <Typography variant="body1" gutterBottom>
      <i>We created and included both the front and end of a to-do list web application by using React 
      , Material UI components, and Javascript. Allows the user to organize tasks.</i>
      </Typography>
      
    </div>
  );
}
