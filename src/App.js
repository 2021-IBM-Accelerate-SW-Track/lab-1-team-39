import React, {useState} from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // todos is the array of TODOs
  const [todo, setTodo] = useState(""); // todo is the current TODO object
  const [todoEditing, setTodoEditing] = useState(null); //todoEditing is the id of the TODO being edited
  const [editingText, setEditingText] = useState(""); //editingText is the text to be submitted

  function handleSubmit(e) {
    e.preventDefault(); // just a good react practice 
    
    let Duplicate=false;
    const newTodo = { // make a TODO object
      id: new Date().getTime(), //just a unique id (can be anything)
      text: todo,
      completed: false,
    };
     [...todos].map((todo) => {
      if (todo.text === newTodo.text) { // if this is the todo is which is completed
        alert("You cannot enter a duplicate note"); // set its completed val to opp of whats there now
        Duplicate=true;
      }
      
    });
    if(Duplicate===false){
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
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      
      <form onSubmit={handleSubmit}> {/*Submit handler runs whenever submit button is clicked. handleSubmit func run when submit is run */} 
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

      ))}
    </div>
  );
};

export default App;