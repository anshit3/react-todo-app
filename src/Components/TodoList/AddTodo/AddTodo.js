import styles from './AddTodo.module.css';

const AddTodo = () => (
  <div className={styles.mainContainer}>
    <div className={styles.mainContainer_inputTaskCtn}>
      <input type="text" autoComplete="off" placeholder="Enter task" />
    </div>
    <div className={styles.mainContainer_buttonCtn}>
      <button className={styles.mainContainer_button} type="button">Add</button>
    </div>
  </div>
);

export default AddTodo;
