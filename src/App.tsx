import React from 'react';
import './App.css';

import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem id='hello' title='Custom title' completed={false} styles={{
        border: '1px solid white'
      }}/>
    </div>
  );
}

export default App;
