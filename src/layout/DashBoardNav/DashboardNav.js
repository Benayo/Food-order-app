import classes from "./DashboardNav.module.css";

import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const DashboardNav = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  return (
    <nav>
      <Link to="/" smooth="true" className={classes.logo}>
        FOOD<span>BLOG</span>
      </Link>

      <ul className={classes["nav__ul"]}>
        <Link className={classes["nav__li"]} smooth to="/user-profile">
          Profile
        </Link>
        <div className={classes["nav__actions"]}>
          <button
            onClick={logoutHandler}
            className={`${classes.btn} ${classes["btn__full"]}`}
          >
            Logout
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default DashboardNav;
