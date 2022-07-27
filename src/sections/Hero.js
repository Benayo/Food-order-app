import React from "react";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes["hero__content"]}>
        <h1 className={classes["text__main"]}>
          Delicious
          <span> African Dishes </span>
        </h1>
        <div className={classes["text__sub"]}>
          African meals with <span>herbs and red pepper..!!</span>
        </div>
        <button className={classes.btn}>View Recipes</button>
      </div>
    </div>
  );
};

export default Hero;
