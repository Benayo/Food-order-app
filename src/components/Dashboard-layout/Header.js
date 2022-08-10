import React from "react";
import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          FOOD<span>BLOG</span>
        </div>

        <HeaderCartButton />
      </header>
      <div className="w-full h-[25rem] bg-meal-item bg-cover bg-no-repeat bg-top clip-your-needful-style"></div>
    </Fragment>
  );
};

export default Header;
