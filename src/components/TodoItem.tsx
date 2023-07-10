import React from 'react';
import {Todo} from '../types';

interface ITodo extends Todo {
  styles?: React.CSSProperties;
}

const TodoItem = ({ id, title, completed, styles = {} }: ITodo) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...styles }}>
      <input type="checkbox" checked={completed}/>
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
}

export default TodoItem;