import React from 'react';

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

const TodoItem = ({ id, title, completed, children, styles = {} }: ITodo) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...styles }}>
      <input type="checkbox" checked={completed}/>
      <span>{title}</span>
      <span>&times;</span>
      {children}
    </li>
  );
}

export default TodoItem;