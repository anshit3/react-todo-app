import { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

const sortForCompletedTasks = (todoList) => {
  return todoList.sort(function (a, b) {
    var compA = new Date(a.completionTime),
      compB = new Date(b.completionTime);
    if (compA > compB) return -1;
    if (compA < compB) return 1;
    return 0;
  });
};

const prepTodosAccToLastCompleted = (todoList, sortedList) => {
  let tempCompTodo = [];
  for (let i = 0; i < 3; i++) {
    if (sortedList[i].completionTime != null) {
      for (let j = 0; j < todoList.length; j++) {
        if (sortedList[i].id == todoList[j].id) {
          if (i == 0) {
            todoList[j]['tag'] = 'recent-green';
          }
          if (i == 1) {
            todoList[j]['tag'] = 'recent-second-magenta';
          }
          if (i == 2) {
            todoList[j]['tag'] = 'recent-third-yellow';
          }
          tempCompTodo.push(todoList[j]);
        } else if (todoList[j]['tag'] && !tempCompTodo.includes(todoList[j])) {
          todoList[j]['tag'] = '';
        }
      }
    }
  }
  return todoList;
};

const TodoItem = (props) => {
  const { allToDosObj } = props;
  const [toDoList, setTodoList] = useState(allToDosObj);
  useEffect(() => {
    setTodoList(allToDosObj);
  }, [allToDosObj]);

  const handleCompletedTask = (event) => {
    if (event.target.checked) {
      toDoList.forEach((element) => {
        if (element.id == event.target.id) {
          element.completionTime = Date.now();
        }
      });
      let tempToDoList = [...toDoList];
      console.log(sortForCompletedTasks(tempToDoList));
      console.log(
        prepTodosAccToLastCompleted(
          toDoList,
          sortForCompletedTasks(tempToDoList)
        )
      );
      setTodoList([...toDoList]);
    } else {
      toDoList.forEach((element) => {
        if (element.id == event.target.id) {
          element.completionTime = null;
          console.log(element);
        }
      });
      let tempToDoList = [...toDoList];
      prepTodosAccToLastCompleted(
        toDoList,
        sortForCompletedTasks(tempToDoList)
      );
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
                  <label
                    className={[
                      todo.tag == 'recent-third-yellow'
                        ? styles.thirdLast
                        : '',
                      todo.tag == 'recent-second-magenta'
                        ? styles.secondLast
                        : '',
                      todo.tag == 'recent-green' ? styles.last : '',
                      todo.completionTime === null ? '' : styles.striked,
                    ].join(' ')}
                    htmlFor={todo.id}
                  >
                    {todo.description}
                  </label>
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
