import React from "react";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav>
      <div className={classes.logo}>
        FOOD<span>BLOG</span>
      </div>

      <ul className={classes["nav__link"]}>
        <li className={classes["nav__link--active"]}>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>

      <div className={classes["nav__actions"]}>
        <button className={`${classes.btn} ${classes["btn__stroke"]}`}>
          Login
        </button>
        <button className={`${classes.btn} ${classes["btn__full"]}`}>
          Sign up
        </button>
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
