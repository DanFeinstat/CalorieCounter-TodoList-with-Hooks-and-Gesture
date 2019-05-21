import React, { useContext } from "react";
import { AppContext } from "../context/context";
import styles from "./NewFood.module.css";

function NewFood() {
  const { state, dispatch } = useContext(AppContext);

  const handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!state.newFoodInput || !state.newCalorieInput) {
      console.log(state.newFoodInput);
      console.log(state.newCalorieInput);
    } else {
      let newCalories = parseInt(state.newCalorieInput);
      console.log(newCalories);
      dispatch({
        type: `ADD_FOOD`,
        payload: {
          food: state.newFoodInput,
          calories: newCalories,
        },
      });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type={`text`}
        className={styles.input}
        value={state.newFoodInput}
        placeholder={`Add a new food`}
        onChange={e => {
          dispatch({ type: `handleInputNewFood`, payload: e.target.value });
        }}
      />
      <input
        type={`text`}
        className={styles.input}
        value={state.newCalorieInput}
        placeholder={`Number of calories`}
        onChange={e => {
          const re = /^[0-9\b]+$/;
          if (re.test(e.target.value)) {
            dispatch({
              type: `handleInputNewCalorie`,
              payload: e.target.value,
            });
          } else {
            if (state.newCalorieInput) {
              e.target.value = state.newCalorieInput;
            } else {
              e.target.value = null;
            }
          }
        }}
      />
      <input type={`submit`} className={styles.submitBtn} />
    </form>
  );
}

export default NewFood;
