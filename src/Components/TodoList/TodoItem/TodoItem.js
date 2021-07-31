import styles from './TodoItem.module.css';

const TodoItem = () => (
  <div>
    <div className={styles.taskContainer}>
      <input type="checkbox" name="task" id="1" />
      <label htmlFor="1">
        Task oneTask oneTask oneTask oneTask oneTask oneTask oneTask oneTask
        oneTask oneTask oneTask oneTask oneTask one
      </label>
    </div>
    <div className={styles.taskContainer}>
      <input type="checkbox" name="task" id="1" />
      <label htmlFor="1">
        Task oneTask oneTask oneTask oneTask oneTask oneTask oneTask oneTask
        oneTask oneTask oneTask oneTask oneTask one
      </label>
    </div>
  </div>
);

export default TodoItem;
