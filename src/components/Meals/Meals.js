import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React from "react";
function Meals(props) {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
      <p
        onClick={() => {
          props.TEST();
        }}
      >
        HIIII
      </p>
    </React.Fragment>
  );
}

export default Meals;
