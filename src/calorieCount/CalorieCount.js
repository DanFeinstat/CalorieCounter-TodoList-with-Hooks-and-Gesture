import React, { useContext } from "react";
import { AppContext } from "../context/context";
import FoodItem from "../foodItem/FoodItem";
import NewFood from "../newFood/NewFood";
import styles from "./CalorieCount.module.css";

function CalorieCount() {
  const { state } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Calorie Count: {state.currentCalories}/{state.totalCalories}
      </header>
      {state.percentDailyCalories > 100 ? (
        <header className={styles.headerWarning}>GETTING FATTER</header>
      ) : null}
      <header className={styles.headerTwo}>
        Percent of Daily Calories:{state.percentDailyCalories}%
      </header>
      <header className={styles.headerTwo}>
        Tasks Remaining ({state.remainingTasks})
      </header>
      <ul className={styles.foodItemList}>
        {state.foods.map((item, index) => (
          <FoodItem item={item} index={index} key={index} />
        ))}
      </ul>
      <div className={styleMedia.addFoodItem}>
        <NewFood />
      </div>
      <p className={styles.pageInstructions}>
        Click and drag left to right anywhere on the screen to change pages.
      </p>
    </div>
    // </div>
  );
}

export default CalorieCount;
