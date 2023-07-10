import React from 'react';
import './App.css';

import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem id='hello' title='Custom title' completed={false} />
    </div>
  );
}

export default App;
