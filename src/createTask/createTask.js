import React, { useContext } from "react";
import styles from "./createTask.module.css";
import { AppContext } from "../context/context";

function CreateTask() {
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.newTaskInput) return;

    dispatch(
      {
        type: `ADD_TASK`,
        payload: { title: state.newTaskInput, completed: false },
      },
      dispatch({ type: `HANDLE_INPUT_NEW_TASK`, payload: "" })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={`text`}
        className={styles.input}
        value={state.newTaskInput}
        placeholder={`Add a new task`}
        onChange={e =>
          dispatch({ type: `HANDLE_INPUT_NEW_TASK`, payload: e.target.value })
        }
      />
    </form>
  );
}

export default CreateTask;
