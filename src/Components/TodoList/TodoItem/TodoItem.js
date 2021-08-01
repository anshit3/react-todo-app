import { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const { allToDosObj } = props;
  const [toDoList, setTodoList] = useState(props);
  console.log(allToDosObj);
  useEffect(() => {
    setTodoList(allToDosObj);
  }, [allToDosObj]);

  const handleCompletedTask = (event) => {
    if (event.target.checked) {
      console.log(event.target.value);
    }
  };

  return (
    <>
      {toDoList &&
        toDoList.length > 0 &&
        toDoList.map((todo, index) => {
          return (
            <div key={index}>
              <div>
                <div className={styles.taskContainer}>
                  <input
                    type="checkbox"
                    name={`task-${index}`}
                    id={`task-${index}`}
                    value={todo.description}
                    onChange={handleCompletedTask}
                  />
                  <label htmlFor={`task-${index}`}>{todo.description}</label>
                </div>
                <div className={styles.seperator}></div>
                <div className={styles.taskTimestampContainer}>
                  <div>
                    <span>Added: </span>
                    <span>{todo.creationTime}</span>
                  </div>
                  <div>
                    <span>Completed: </span>
                    <span>
                      {todo.completionTime === null
                        ? 'Not Completed'
                        : todo.completionTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {toDoList && toDoList.length === 0 && (
        <div>
          <p>No todo listed</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
