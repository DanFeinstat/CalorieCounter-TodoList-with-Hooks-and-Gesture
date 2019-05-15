import React, { useEffect, useContext } from "react";
import { TaskContext } from "../context/context";
import Task from "../task/task";
import CreateTask from "../createTask/createTask";
import styles from "./todo.module.css";

function Todo() {
  const { state, dispatch } = useContext(TaskContext);

  useEffect(() => {
    dispatch({ type: `FILTER_TASKS` });
  }, [state.tasks]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Pending tasks: ({state.remainingTasks})
      </header>
      <ul className={styles.tasks}>
        {state.tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </ul>
      <div className={styles.createTask}>
        <CreateTask />
      </div>
    </div>
  );
}

export default Todo;
