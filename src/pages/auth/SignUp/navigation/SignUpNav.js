import React from "react";
import { Link } from "react-router-dom";

import classes from "./SignUpNav.module.css";

const SignUpNav = () => {
  return (
    <nav>
      <Link to="/" smooth="true" className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>

      <Link to="/auth/login">
        <button className={classes.btn}>Login</button>
      </Link>
    </nav>
  );
};

export default SignUpNav;
