import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import useInput from "../../hook/use-input";

import AuthContext from "../../store/auth-context";
import LoginNav from "../../layout/Navigation/LoginNav";
import classes from "./Login.module.css";

const isPassword = (value) => value.length > 6;
const isEmail = (value) => value.includes("@");

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState("");

  const [error, setError] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);

    axios
      .post("https://foodblogafrika.herokuapp.com/api/v1/auth/login", {
        email: emailValue,
        password: passwordValue,
      })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data.user));

        localStorage.setItem("access", JSON.stringify(res.data.access_token));

        const storedData = JSON.parse(localStorage.getItem("userData"));

        console.log(storedData);

        setIsLoading(false);


        authCtx.login(res.data.access_token);

        
        history.replace("/dashboard");
      })

      .catch((error) => {
        setIsLoading(false);
        setError(true);
        if (error.response) {
          setHttpError(error.response.data.msg);
        }
      });

    resetEmail();
    resetPassword();
  };

  return (
    <div>
      <LoginNav />

      <div className={classes.container}>
        <div className={classes["text__main"]}>Welcome Back</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>

        <form onSubmit={submitHandler}>
          {error && <div className={classes["error-text--1"]}>{httpError}</div>}
          <div className={classes.control}>
            <input
              className={classes[emailHasError ? "invalid" : "input"]}
              type="email"
              placeholder="Email Address"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <div className={classes["error-text"]}>
                Please enter a valid email.
              </div>
            )}
          </div>
          <div className={classes.control}>
            <input
              className={classes[passwordHasError ? "invalid" : "input"]}
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <div className={classes["error-text"]}>
                Please enter a strong password
              </div>
            )}
          </div>

          <Link to="/forget-password">
            <div className={classes["forget_password"]}>Forget Password?</div>
          </Link>
          <div className={classes.terms}>
            By continuing, I represent that I have read, understand, and fully
            agree to the FOODBLOG <span>terms of service</span> and{" "}
            <span>privacy policy</span> .
          </div>
          <button className={classes.btn}>
            {!isLoading ? "Continue" : "Loading..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
