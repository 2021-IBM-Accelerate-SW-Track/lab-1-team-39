import React, {useState} from "react";
import "./App.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

function App() {
  const [todos, setTodos] = useState([]); // todos is the array of TODOs
  const [todo, setTodo] = useState(""); // todo is the current TODO object
  const [todoEditing, setTodoEditing] = useState(null); //todoEditing is the id of the TODO being edited
  const [editingText, setEditingText] = useState(""); //editingText is the text to be submitted

  function handleSubmit(e) {
    e.preventDefault(); // just a good react practice 

    const newTodo = { // make a TODO object
      id: new Date().getTime(), //just a unique id (can be anything)
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo)); //takes in our current TODOs and makes a new array out of it and concats it.
    setTodo(""); // just to restore the hook to its empty string
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
      
      <form onSubmit={handleSubmit}> {/*Submit hadler runs whenever submit button is clicked. handleSubmit func run when submit is run */} 
        <input // input text for typing our TODOs and a button for "addTodo" so we can submit
          type="text"
          onChange={(e) => setTodo(e.target.value)} // arrow function passes the input text. e.target.value to access the text. e is an event object
          value={todo}
        />
        <button type="submit">Add Todo</button> 
      </form>
    
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
                <ListItemText primary={todo.text} />
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
                </div>
              
              ) : (
                <IconButton edge="end" aria-label="comments" onClick={() => setTodoEditing(todo.id)}>
                  <EditIcon />
                </IconButton>
              )}

              <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo.id)}>
               <DeleteOutlinedIcon />
              </IconButton>

            </ListItemSecondaryAction>

        </ListItem>


      ))}
    </div>
  );
};

export default App;