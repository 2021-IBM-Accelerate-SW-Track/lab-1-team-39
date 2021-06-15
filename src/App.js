import React, {useState} from "react";
import "./App.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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
        
        <div key={todo.id} >
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>

          <div>
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
/**  updating ui
        <ListItem key={todo.id}  role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                color="primary"
              />
              {todo.id === todoEditing ? (
                <input
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div>{todo.text}</div>
              )}
            </ListItemIcon>

            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>*/


      ))}
    </div>
  );
};

export default App;