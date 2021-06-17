import React, {useState} from "react";
import "./App.css";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@material-ui/core/Checkbox';

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CancelIcon from '@material-ui/icons/Cancel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputForm: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  textField: {
    '& > *': {
      width: '25ch',
    },
  },
  todoList: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();

  const [todos, setTodos] = useState([]); // todos is the array of TODOs
  const [todo, setTodo] = useState(""); // todo is the current TODO object
  const [todoEditing, setTodoEditing] = useState(null); //todoEditing is the id of the TODO being edited
  const [editingText, setEditingText] = useState(""); //editingText is the text to be submitted
  var todoError = false;

  function handleSubmit(e) {
    e.preventDefault(); // just a good react practice 

    const newTodo = { // make a TODO object
      id: new Date().getTime(), //just a unique id (can be anything)
      text: todo,
      currentDateTime: new Date().toLocaleString('en-US') ,
      completed: false,
    };

    //validation code
    let Duplicate=false;
    todoError = false;
    
    if(todo === ""){
      todoError = true;
    }
    [...todos].map((todo) => {
      if (todo.text === newTodo.text) { // if this is the todo is which is completed
        todoError = true;
        Duplicate=true;
      }
    });
    if(todoError === false && Duplicate === false){
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
   
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id); // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) { // if this is the todo is which is completed
        todo.completed = !todo.completed; // set its completed val to opp of whats there now
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
        todo.currentDateTime = new Date().toLocaleString('en-US');
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  function cancelEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      
      <form className={classes.inputForm} onSubmit={handleSubmit} noValidate autoComplete="off"> {/*Submit hadler runs whenever submit button is clicked. handleSubmit func run when submit is run */} 
         <div> 
         <TextField className = {classes.textField}
          data-testid="new-item-input" // input text for typing our TODOs and a button for "addTodo" so we can submit
          label="Add a task" 
          type="text"
          value={todo} 
          variant="outlined" 
          onChange={(e) => setTodo(e.target.value)} // arrow function passes the input text. e.target.value to access the text. e is an event object
          required
          error = {todoError}
        />
         </div>
         <div> 
         <Button 
          data-testid="new-item-button"
          onClick={() => console.log('attempt to add new task')}
          type = "submit"
          variant= "contained" 
          color= "primary"
        >
          Save
        </Button>
         </div>
      </form>
      <List className={classes.todoList}>
        {todos.map((todo) => (
          <ListItem key={todo.id}  role={undefined} dense button >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  tabIndex={-1}
                  disableRipple
                  color="primary"
                />
                {todo.id === todoEditing ? (
                  <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  <ListItemText primary={todo.text +" - Date Added: "+ todo.currentDateTime} />
                )}
              </ListItemIcon>

              <ListItemSecondaryAction>

                {todo.id === todoEditing ? (
                  <div> 
                    <IconButton edge="end" aria-label="comments" onClick={() => submitEdits(todo.id)}>
                      <CheckIcon />
                    </IconButton>

                    <IconButton edge="end" aria-label="comments" onClick={() => cancelEdits(todo.id)}>
                      <CancelIcon />
                    </IconButton>

                    <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo.id)}>
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </div>
                
                ) : ( 
                  <div> 
                    <IconButton edge="end" aria-label="comments" onClick={() => setTodoEditing(todo.id)}>
                      <EditIcon/>
                    </IconButton>

                    <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo.id)}>
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </div>
                )}
              </ListItemSecondaryAction>

          </ListItem>


        ))}
      </List>
    </div>
  );
};

export default App;