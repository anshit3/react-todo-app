import { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const { allToDosObj } = props;
  const [toDoList, setTodoList] = useState(allToDosObj);
  console.log(toDoList);
  useEffect(() => {
    setTodoList(allToDosObj);
  }, [allToDosObj]);

  const handleCompletedTask = (event) => {
    if (event.target.checked) {
      toDoList.forEach((element) => {
        if (element.id == event.target.id) {
          element.completionTime = Date.now();
          console.log(element);
        }
      });
      setTodoList([...toDoList]);
      console.log(event.target.id);
      console.log(toDoList);
    } else {
      toDoList.forEach((element) => {
        if (element.id == event.target.id) {
          element.completionTime = null;
          console.log(element);
        }
      });
      setTodoList([...toDoList]);
    }
  };

  return (
    <>
      {toDoList &&
        toDoList.length > 0 &&
        toDoList.map((todo, index) => {
          return (
            <div key={todo.id + index}>
              <div>
                <div className={styles.taskContainer}>
                  <input
                    type="checkbox"
                    name={todo.id}
                    id={todo.id}
                    value={todo.description}
                    onChange={handleCompletedTask}
                    checked={todo.completionTime === null ? false : true}
                  />
                  <label htmlFor={todo.id}>{todo.description}</label>
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
                        : new Date(todo.completionTime).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {toDoList && toDoList.length === 0 && (
        <div className={styles.notodoCtn}>
          <p>No todo listed</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
