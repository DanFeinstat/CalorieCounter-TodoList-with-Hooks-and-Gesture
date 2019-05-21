import React, { useContext } from "react";
import { AppContext } from "../context/context";
import styles from "./FoodItem.module.css";

function FoodItem({ item, index }) {
  const { state, dispatch } = useContext(AppContext);
  const { food, calories } = item;
  return (
    <li
      className={styles.task}
      style={{
        color: state.currentCalories > state.totalCalories ? `red` : `#0c7cfb`,
      }}
    >
      {food} : {calories}
      <button
        className={`${styles.button}`}
        onClick={() => {
          dispatch({ type: `removeFood`, payload: index });
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default FoodItem;
