import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <section className={classes.container}>
      <div className="flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-4 md:hidden"
          onClick={props.onClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div>
          <div className={classes.dashboard}>{props.title}</div>{" "}
          <span className={classes["dashboard-span"]}>{props.title2}</span>
        </div>
      </div>

      <div className={classes.view}>
        <span>{props.view}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Header;
