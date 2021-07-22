import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const data = [1, 2, 3];

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      {props.func(data)}
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
