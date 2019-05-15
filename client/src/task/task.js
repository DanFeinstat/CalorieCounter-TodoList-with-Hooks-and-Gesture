import React, { useContext } from "react";
import { TaskContext } from "../context/context";
import styles from "./task.module.css";

function Task({ task, index }) {
  const { state, dispatch } = useContext(TaskContext);
  const { completed, title } = task;
  return (
    <li
      className={styles.task}
      style={{ textDecoration: completed ? `line-through` : `` }}
    >
      {title}
      <button
        style={{ background: `red` }}
        onClick={() => {
          dispatch({ type: `REMOVE_TASK`, payload: index });
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          dispatch({ type: `COMPLETE_TASK`, payload: index });
        }}
      >
        {completed ? `Incomplete?` : `Complete?`}
      </button>
    </li>
  );
}

export default Task;
