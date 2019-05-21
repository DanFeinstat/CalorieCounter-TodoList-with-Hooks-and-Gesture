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
  foods: [
    {
      food: "Greek Yogurt",
      calories: 94,
    },
    {
      food: "Double Double Animal Style Burger",
      calories: 670,
    },
    {
      food: "Iced Latte",
      calories: 190,
    },
  ],
  currentCalories: 954,
  newFoodInput: "",
  newCalorieInput: "",
  totalCalories: 1900,
  percentDailyCalories: 50.2,
};

function reducer(state, action) {
  switch (action.type) {
    case `ADD_FOOD`:
      const newFood = [...state.foods];
      const moreCal = state.currentCalories + action.payload.calories;
      const higherPercent =
        Math.round((moreCal / state.totalCalories) * 1000) / 10;
      newFood.push(action.payload);
      return {
        ...state,
        foods: newFood,
        currentCalories: moreCal,
        percentDailyCalories: higherPercent,
        newFoodInput: "",
        newCalorieInput: "",
      };
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
    case `removeFood`:
      const foodIndex = action.payload;
      const lessCal = state.currentCalories - state.foods[foodIndex].calories;
      const lowerPercent =
        Math.round((lessCal / state.totalCalories) * 1000) / 10;
      const removeFood = [...state.foods];
      removeFood.splice(foodIndex, 1);
      return {
        ...state,
        foods: removeFood,
        currentCalories: lessCal,
        percentDailyCalories: lowerPercent,
      };
    case `REMOVE_TASK`:
      const removeIndex = action.payload;
      const removeTasks = [...state.tasks];
      removeTasks.splice(removeIndex, 1);
      return { ...state, tasks: removeTasks };
    case `HANDLE_INPUT_NEW_TASK`:
      const newValue = action.payload;
      return { ...state, newTaskInput: newValue };
    case `handleInputNewFood`:
      const newFoodInput = action.payload;
      return { ...state, newFoodInput: newFoodInput };
    case `handleInputNewCalorie`:
      const newCalorie = action.payload;
      return { ...state, newCalorieInput: newCalorie };
    default:
      return state;
  }
}

const AppContext = React.createContext(initialState);

function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
