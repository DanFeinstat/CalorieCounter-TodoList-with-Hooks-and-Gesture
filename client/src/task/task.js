import React, { useContext } from "react";
import { AppContext } from "../context/context";
import styles from "./task.module.css";

function Task({ task, index }) {
  const { state, dispatch } = useContext(AppContext);
  const { completed, title } = task;
  return (
    <li
      className={styles.task}
      style={{ textDecoration: completed ? `line-through` : `` }}
    >
      {title}
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          style={{ background: `red` }}
          onClick={() => {
            dispatch({ type: `REMOVE_TASK`, payload: index });
          }}
        >
          Remove
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch({ type: `COMPLETE_TASK`, payload: index });
          }}
        >
          {completed ? `Incomplete?` : `Complete?`}
        </button>
      </div>
    </li>
  );
}

export default Task;
