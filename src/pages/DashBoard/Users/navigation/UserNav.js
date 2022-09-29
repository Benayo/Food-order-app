import classes from "./UserNav.module.css";

import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <nav>
      <Link to="/" smooth="true" className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>
    </nav>
  );
};

export default UserNav;
