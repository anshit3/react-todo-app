import { useState } from 'react';
import styles from './AddTodo.module.css';

const AddTodo = (props) => {
  const { handleTodoAddition } = props;
  const [todo, setTodo] = useState('');

  const handlechangeOnTodoInput = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };

  const handleSubmit = () => {
    let todoObj = {
      id: Date.now(),
      creationTime: new Date().toLocaleString(),
      completionTime: null,
      description: todo,
    };
    handleTodoAddition(todoObj);
    setTodo('');
    console.log(todoObj);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer_inputTaskCtn}>
        <input
          type="text"
          onChange={handlechangeOnTodoInput}
          autoComplete="off"
          placeholder="Enter task"
          value={todo}
        />
      </div>
      <div className={styles.mainContainer_buttonCtn}>
        <button
          className={styles.mainContainer_button}
          type="button"
          disabled={todo.length > 0 ? false : true}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
