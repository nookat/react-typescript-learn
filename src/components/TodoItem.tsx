import React from 'react';
import {Todo} from '../types';

interface ITodo extends Todo {
  styles?: React.CSSProperties;
  toggleTodo: (id: Todo['id']) => void;
  removeTodo: (id: Todo['id']) => void;
}

const TodoItem = ({id, title, completed, toggleTodo, removeTodo, styles = {}}: ITodo) => {
  return (
    <li style={{color: 'red', backgroundColor: 'white', ...styles}}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
}

export default TodoItem;