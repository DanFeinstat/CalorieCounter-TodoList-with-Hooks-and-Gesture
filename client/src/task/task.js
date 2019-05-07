import React from "react";
import styles from "./task.module.css";

function Task({ task, index, completeTask, removeTask }) {
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
          removeTask(index);
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          completeTask(index);
        }}
      >
        Complete
      </button>
    </li>
  );
}

export default Task;
