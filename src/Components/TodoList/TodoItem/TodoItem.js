import styles from './TodoItem.module.css';

const TodoItem = () => (
  <div>
    <div>
      <div className={styles.taskContainer}>
        <input type="checkbox" name="task" id="1" />
        <label htmlFor="1">
          Task oneTask oneTask oneTask oneTask oneTask oneTask oneTask oneTask
          oneTask oneTask oneTask oneTask oneTask one
        </label>
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.taskTimestampContainer}>
        <div>
          <span>Added: </span>
          <span>23rd Feb</span>
        </div>
        <div>
          <span>Completed: </span>
          <span>24th Feb</span>
        </div>
      </div>
    </div>
    <div>
      <div className={styles.taskContainer}>
        <input type="checkbox" name="task" id="1" />
        <label htmlFor="1">
          Task oneTask oneTask oneTask oneTask oneTask oneTask oneTask oneTask
          oneTask oneTask oneTask oneTask oneTask one
        </label>
      </div>
    </div>
  </div>
);

export default TodoItem;
