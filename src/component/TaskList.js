/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

//TODO: When button is clicked and textflied has an exceptable input, add value in text field to list
//TODO: align task list to middle of page with a minimal border(maybe light grey)
//TODO: change comment Icon to edit icon from material -ui
//TODO: when comment icon clicked alow user to change task name to valide task name input


*/
/*
import React from "react"
import Task from "./Task"
import { List } from "@material-ui/core";

function TaskList({todos, removeTodo, toggleComplete }){
  return(
    <List>
    {todos.map(todo => (
      <Task
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    ))}
  </List>
  );
}


export default TaskList;
*/

import { List } from "@material-ui/core";
import React from "react";
import Task from "./Task";

function TaskList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map(todo => (
        <Task
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TaskList;