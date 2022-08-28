import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvalableMeals from "./AvalableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalableMeals />
    </Fragment>
  );
};

export default Meals;
