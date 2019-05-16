import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/context";
import Task from "../task/task";
import CreateTask from "../createTask/createTask";
import styles from "./todo.module.css";

function Todo() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: `FILTER_TASKS` }, [state.tasks]);
  });

  return (
    // <div className={styles.pageContainer}>
    <div className={styles.container}>
      <header className={styles.header}>
        Pending tasks: ({state.remainingTasks})
      </header>
      <header className={styles.headerTwo}>
        Daily Calories: {state.percentDailyCalories}%
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
    // </div>
  );
}

export default Todo;
