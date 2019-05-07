import React, { useState } from "react";
import styles from "./createTask.module.css";

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={`text`}
        className={styles.input}
        value={value}
        placeholder={`Add a new task`}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default CreateTask;
