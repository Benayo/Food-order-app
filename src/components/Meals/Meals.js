import React, { Fragment } from "react";

import AvaliableMeals from "./AvaliableMeals";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvaliableMeals />
    </Fragment>
  );
};

export default Meals;
