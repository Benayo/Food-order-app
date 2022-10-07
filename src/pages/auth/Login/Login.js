import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import useInput from "../../../hook/use-input";

import AuthContext from "../../../store/auth-context";
import LoginNav from "./LoginNav";
import classes from "./Login.module.css";

const isPassword = (value) => value.length > 6;
const isEmail = (value) => value.includes("@");

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState("");

  const [error, setError] = useState(false);

  const [passwordType, setPasswordType] = useState("text");

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

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);

    axios
      .post("https://foodblogafrika.cyclic.app/api/v1/auth/login", {
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

        history.replace("/user-dashboard");
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
          <div
            className={`${classes["input__control"]} ${classes["input__password"]}`}
          >
            <input
              className={classes[passwordHasError ? "invalid" : "input"]}
              type={passwordType}
              placeholder="Password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />

            <i
              className="absolute  z-20 px-6 pt-2 cursor-pointer"
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </i>
          </div>
          <div className="mb-4">
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
