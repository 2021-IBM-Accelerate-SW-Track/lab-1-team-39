import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//material-ui css style sheet 
const useStyles = makeStyles((theme) => ({
  input_field: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function New_Task_Form() {
  //calls in css style sheet
  const classes = useStyles();
  // input value variable and mutator/variable setter function
  const [task,setTask] = useState("");
  //input error detector variable
  const [taskError,setTaskError] = useState(false);
  
  //handels updat in textfield
  const handleChange = (e) => {
    console.log(`Typed => ${e.target.value}`);
    setTask(e.target.value);
  }

  //stores vaild textfield value in array 
  //TODO: pass the array task list
  const handleSubmit = (e) => {
    e.preventDefault()
    //handles error
    setTaskError(false)
    if(task == ''){
      setTaskError(true)
    }
    //stores task in task array and sends task list
    //TODO: store task value in array 
    //TODO: send array list display using task-list component
    if(task){
      console.log(task)
    }
  }

  return (
    <form className={classes.input_field} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField 
      label="Add a task" 
      value={task} 
      variant="outlined" 
      onChange={handleChange} 
      fullWidth
      required
      error = {taskError}
      />
      <Button 
      onClick={() => console.log('you clicked me')}
      type = "submit"
      variant= "contained" 
      color= "primary"
      >
        Save Task
      </Button>
    </form>
  );
}