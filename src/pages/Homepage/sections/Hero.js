import React from "react";
import { Link } from "react-router-dom";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div id="home" className={classes.container}>
      <div className={classes["hero__content"]}>
        <h1 className={classes["text__main"]}>
          Delicious
          <span> African Dishes </span>
        </h1>
        <div className={classes["text__sub"]}>
          African meals with <span>herbs and red pepper..!!</span>
        </div>
        <Link to="/auth/login">
          <button className={classes.btn}>View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
