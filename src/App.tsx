import React, {useState} from 'react';
import './App.css';

import NewTodoForm from "./components/NewTodoForm";
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

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    setTodos([text, ...todos]);
    setText('');
  };

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id='hello' title='Custom title' completed={false} styles={{
        border: '1px solid white'
      }}/>
    </div>
  );
}

export default App;
