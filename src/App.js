import Header from "./component/header"
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import React from 'react';
import Task_Text_Field from "./component/task-text-field"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  return (
    //display components
    <div className="App">
      <Header/>
      <Task_Text_Field/>
    </div>
  );
}

export default App;
