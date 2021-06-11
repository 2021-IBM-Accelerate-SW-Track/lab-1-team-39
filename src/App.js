import Header from "./component/header"
import Task_Text_Field from "./component/task-text-field"
import Task_List from "./component/task-list"
import './App.css';
import React from 'react';


function App() {
  return (
    //display components
    <div className="App">
      <Header/>
      <Task_Text_Field/>
      <Task_List/>
    </div>
  );
}

export default App;
