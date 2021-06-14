/*
//defines what a todo looks like
// 3 main elements- checkbox, task, delete button
import {Checkbox, IconButton, ListItem, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Task({task,toggleComplete,removeTask}){
    function handleCheckboxClick(){
        toggleComplete(task.id);
    }

    function handleRemoveClick(){
        removeTask(task.id)
    }
    return(
        <ListItem style={{ display: "flex" }}>
        <Checkbox checked={task.completed} onClick={handleCheckboxClick} />
        <Typography
          variant="body1"
          style={{
            textDecoration: task.completed ? "line-through" : null
          }}
        >
          {task.task}
        </Typography>
        <IconButton onClick={handleRemoveClick}>
          <CloseIcon />
        </IconButton>
      </ListItem>
    )
}

export default Task;
*/

import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Task({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Task;