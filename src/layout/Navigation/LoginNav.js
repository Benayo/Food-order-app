import React from "react";
import { Link } from "react-router-dom";

import classes from "./LoginNav.module.css";

const LoginNav = () => {
  return (
    <nav>
      <Link to="/" smooth className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>

      <button className={classes.btn}>Sign up</button>
    </nav>
  );
};

export default LoginNav;
