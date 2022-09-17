import React from "react";
import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import VerifyEmail from "../../pages/profile/VerifyEmail";

import AuthContext from "../../store/auth-context";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    axios
      .post("https://foodblogafrika.herokuapp.com/api/v1/auth/forgetpassword", {
        email: emailValue,
      })
      .then((res) => {
        setIsLoading(false);
        setOnConfirm(true);
      })
      .catch((error) => {
        setOnConfirm(false);
        setIsLoading(false);

        if (error.response) {
          alert(error.response.data.msg);
        }
      });
  };

  return (
    <Fragment>
      {isLoading && <p>Loading...</p>}
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
