// import { HashLink as Link } from "react-router-hash-link";

import classes from "./SideNav.module.css";

const SideNav = (props) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["logo_cancel_nav"]}>
        <div className={classes.logo}>
          FOOD<span>BLOG</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.cancel}
            onClick={props.onCancel}
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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className=" w-full text-white-100  p-2 my-4 bg-primary rounded-3xl">
        Login
      </button>
    </div>
  );
};

export default SideNav;
