import React from "react";
import classes from "./PopularMeals.module.css";

const PopularMeals = () => {
  return (
    <div className={classes.container}>
      <div className={classes["text__main"]}>Most Popular Recipes</div>
      <div className={classes["grid__container"]}>
        <div className={`${classes["meal__container"]} ${classes["meal--1"]}`}>
          <div className={classes.label}>Jellof Rice</div>
        </div>

        <div className={`${classes["meal__container"]} ${classes["meal--2"]}`}>
          <div className={classes.label}>Ofada Rice</div>
        </div>
        <div className={`${classes["meal__container"]} ${classes["meal--3"]}`}>
          <div className={classes.label}>Pounded yam</div>
        </div>
        <div className={`${classes["meal__container"]} ${classes["meal--4"]}`}>
          <div className={classes.label}>Porridge</div>
        </div>
        <div className={`${classes["meal__container"]} ${classes["meal--5"]}`}>
          <div className={classes.label}>Ewa agoyin</div>
        </div>
        <div className={`${classes["meal__container"]} ${classes["meal--6"]}`}>
          <div className={classes.label}>Amala& Ewedu</div>
        </div>
        <div className={`${classes["meal__container"]} ${classes["meal--7"]}`}>
          <div className={classes.label}>Eba & Efo riro</div>
        </div>
      </div>
    </div>
  );
};

export default PopularMeals;
