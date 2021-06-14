 import Header from "./component/Header"

import React, { useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";


function App() {
  const [todos, setTasks] = useState([]);

//useState is a function that takes an inital state as a property and outputs a tuple array of 2 items.
// const [state, setState] = useState([]); Here state in our case is an array. seState is a function used to update the state (array)
// We need this function(setState) because in React states are immutable i.e in order to update the array.


  function addTask(todo) {
    // adds new todo to beginning of todos array
    setTasks([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTasks(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTask(id) {
    setTasks(todos.filter(todo => todo.id !== id));
  }

  return ( // pass "addTask" function to the TaskForm component as a prop
    <div className="App">
      <Header />
      <TaskForm addTodo={addTask} /> 
      <TaskList
        todos={todos}
        removeTodo={removeTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;