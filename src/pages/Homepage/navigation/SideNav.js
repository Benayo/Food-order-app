import { HashLink as NavLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import classes from "./SideNav.module.css";

const SideNav = (props) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["logo_cancel_nav"]}>
        <NavLink
          to="#home"
          smooth="true"
          onClick={props.onCancel}
          className={classes.logo}
        >
          FOOD<span>BLOG</span>
        </NavLink>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.cancel}
            onClick={props.onCancel}
            smooth="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <ul className={classes["nav__list"]}>
        <NavLink
          to="#home"
          className={classes["nav__li"]}
          smooth="true"
          onClick={props.onCancel}
        >
          Home
        </NavLink>
        <NavLink
          to="#about"
          className={classes["nav__li"]}
          smooth="true"
          onClick={props.onCancel}
        >
          About
        </NavLink>
        <NavLink
          to="#contact"
          className={classes["nav__li"]}
          smooth="true"
          onClick={props.onCancel}
        >
          Contact
        </NavLink>
      </ul>

      <Link to="/auth/login">
        <button className={classes.btn}>Login</button>
      </Link>
    </div>
  );
};

export default SideNav;
