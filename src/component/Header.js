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
      We created and included both the front and end of a to-do list web application by using React 
      , Material UI components, and Javascript. Allow the users to organize tasks.
      </Typography>
      
    </div>
  );
}
>>>>>>> 3dc3ff938cc65b15ba6a885ca98aaa0d9ac431c8:src/component/header/header.js
