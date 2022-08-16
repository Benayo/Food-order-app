import React from "react";
import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          FOOD<span>BLOG</span>
        </div>

        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes.img}></div>
    </Fragment>
  );
};

export default Header;
