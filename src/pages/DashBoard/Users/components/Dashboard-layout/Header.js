import React from "react";
import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import VerifyEmail from "../../../../auth/SignUp/components/VerifyEmail";
import AuthContext from "../../../../../store/auth-context";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [onConfirm, setOnConfirm] = useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };

  const storedData = JSON.parse(localStorage.getItem("userData"));

  const emailValue = storedData.email;

  const toggleCloseModalHandler = () => {
    setOnConfirm(false);
  };

  const changePasswordHandler = () => {
    axios
      .post("https://foodblogafrika.cyclic.app/api/v1/auth/resetpassword", {
        email: emailValue,
      })
      .then((res) => {
        setOnConfirm(true);
      })
      .catch((error) => {
        setOnConfirm(false);

        if (error.response) {
          alert(error.response.data.msg);
        }
      });
  };

  return (
    <Fragment>
      {onConfirm && <VerifyEmail onCancel={toggleCloseModalHandler} />}
      <header className={classes.header}>
        <div className={classes.logo}>
          FOOD<span>BLOG</span>
        </div>

        <ul className={classes["nav__ul"]}>
          <Link className={classes["nav__li"]} onClick={changePasswordHandler}>
            Profile
          </Link>

          <Link onClick={logoutHandler} className={classes["nav__li"]}>
            Logout
          </Link>
        </ul>

        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes.img}></div>
    </Fragment>
  );
};

export default Header;
