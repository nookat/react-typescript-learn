import React, {useState} from 'react';
import './App.css';

import TodoItem from "./components/TodoItem";

type TypeTodo = {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<TypeTodo | null>(null);

  return (
    <div className="App">
      <TodoItem id='hello' title='Custom title' completed={false} styles={{
        border: '1px solid white'
      }}/>
    </div>
  );
}

export default App;
