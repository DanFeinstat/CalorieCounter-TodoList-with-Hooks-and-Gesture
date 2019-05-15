import React, { useReducer } from "react";

const initialState = {
  tasks: [
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ],
  remainingTasks: 1,
  newTaskInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case `ADD_TASK`:
      const newTasks = [...state.tasks];
      newTasks.push(action.payload);
      return { ...state, tasks: newTasks };
    case `COMPLETE_TASK`:
      const completeIndex = action.payload;
      const completeTasks = [...state.tasks];
      completeTasks[completeIndex].completed = !completeTasks[completeIndex]
        .completed;
      return { ...state, tasks: completeTasks };
    case `FILTER_TASKS`:
      const currentTasks = [...state.tasks];
      const remaining = currentTasks.filter(task => !task.completed).length;
      return { ...state, remainingTasks: remaining };
    case `REMOVE_TASK`:
      const removeIndex = action.payload;
      const removeTasks = [...state.tasks];
      removeTasks.splice(removeIndex, 1);
      return { ...state, tasks: removeTasks };
    case `HANDLE_INPUT_NEW_TASK`:
      const newValue = action.payload;
      return { ...state, newTaskInput: newValue };

    default:
      return state;
  }
}

const TaskContext = React.createContext(initialState);

function TaskProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
