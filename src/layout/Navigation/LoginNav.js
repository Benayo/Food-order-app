import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./LoginNav.module.css";

const LoginNav = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <nav>
      <Link to="/" smooth="true" className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>

      {!isLoggedIn && (
        <Link to="/auth/sign-in">
          <button className={classes.btn}>Sign up</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/auth/sign-in">
          <button className={classes.btn}>Logout</button>
        </Link>
      )}
    </nav>
  );
};

export default LoginNav;
