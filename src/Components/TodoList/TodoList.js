import AddTodo from './AddTodo/AddTodo';
import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => (
  <div className={styles.todolistContainer}>
    <AddTodo />
    <TodoItem />
  </div>
);

export default TodoList;
