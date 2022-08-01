import React from "react";
import { Link } from "react-router-dom";

import classes from "./LoginNav.module.css";

const SignInNav = () => {
  return (
    <nav>
      <Link to="/" smooth className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>

      <Link to="/login">
        <button className={classes.btn}>Login</button>
      </Link>
    </nav>
  );
};

export default SignInNav;
