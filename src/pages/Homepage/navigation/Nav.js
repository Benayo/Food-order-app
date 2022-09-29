import React from "react";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav>
      <Link to="/" smooth="true" className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>

      <ul className={classes["nav__ul"]}>
        <Link to="/">
          <NavLink
            to="#home"
            smooth="true"
            className={`${classes["nav__link--active"]} ${classes["nav__li"]}`}
          >
            Home
          </NavLink>
        </Link>

        <NavLink className={classes["nav__li"]} smooth="true" to="#about">
          About us
        </NavLink>

        <NavLink className={classes["nav__li"]} smooth to="#contact">
          Contact
        </NavLink>
      </ul>

      <div className={classes["nav__actions"]}>
        <Link to="/auth/login">
          <button className={`${classes.btn} ${classes["btn__stroke"]}`}>
            Login
          </button>
        </Link>

        <Link to="/auth/sign-up">
          <button className={`${classes.btn} ${classes["btn__full"]}`}>
            Sign up
          </button>
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.menu}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={props.onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </nav>
  );
};

export default Nav;
