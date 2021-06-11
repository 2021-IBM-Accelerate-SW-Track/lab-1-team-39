import Header from "./component/header"
import Task_Text_Field from "./component/task-text-field"
import Task_List from "./component/task-list"
import Save_Button from "./component/save-button"
import './App.css';
import React from 'react';


function App() {
  return (
    //display components + changes
    <div className="App">
      <Header/>
      <Task_Text_Field/>
      <Save_Button/>
      <Task_List/>
    </div>
  );
}

export default App;
