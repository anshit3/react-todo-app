import { useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleTodoAddition = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <div className={styles.todolistContainer}>
      <AddTodo handleTodoAddition={handleTodoAddition} />
      <div className={styles.listContainer}>
        <TodoItem allToDosObj={todos} />
      </div>
    </div>
  );
};

export default TodoList;
