import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h4" gutterBottom>
      2021 IBM Accelerate Software Group #39: To-Do List
      </Typography> 
      <Typography variant="body1" gutterBottom>
      <h5> A to-do list web application developed by using React, Material UI components, and Javascript.
      <br/>
      <br/>It has the following features:</h5>
      <h6> 
        1. Take in and display to do list items.
        2. Allow users to mark items as complete.
        3. Provide the date and time of item addition.
        4. Validate there are no duplicated items (i.e. do not accept duplicate inputs).
        5. Give users the option to update list items.
        6. Give users the option to delete list items.
      </h6>
 
      </Typography>
      
    </div>
  );
}
