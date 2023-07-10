import React, {useState} from 'react';
import './App.css';

import {Todo} from './types';

import NewTodoForm from "./components/NewTodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false
    };

    setTodos([newTodo, ...todos]);
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
