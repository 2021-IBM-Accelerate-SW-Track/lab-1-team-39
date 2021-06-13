import Header from "./component/header"
import New_Task_Form from "./component/new-task-form"
import Task_List from "./component/task-list"
import './App.css';
import React from 'react';


function App() {
  return (
    //display components
    <div className="App">
      <Header/>
      <New_Task_Form/>
      <Task_List/>
    </div>
  );
}

export default App;
