import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import useInput from "../../hook/use-input";

import classes from "./SignIn.module.css";
import AuthContext from "../../store/auth-context";
import SignInNav from "../../layout/Navigation/SignInNav";

const isPassword = (value) => value.length > 6;
const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

const SignIn = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

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

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXFa7ElAN-91B8g1G1Ebc3NtWHwxHj3gY",
      {
        method: "POST",
        body: JSON.stringify({
          firstName: firstNameValue,
          lastName: firstNameValue,
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };

  return (
    <div>
      <SignInNav />
      <div className={classes.container}>
        <div className={classes["text__main"]}>Let's get you started</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes["input__control"]}>
            <input
              className={classes[firstNameHasError ? "invalid" : "input"]}
              type="text"
              placeholder="First Name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className={classes["error-text"]}>
                Firstname must not be empty
              </p>
            )}
          </div>
          <div className={classes["input__control"]}>
            <input
              className={classes[lastNameHasError ? "invalid" : "input"]}
              type="text"
              placeholder="Last Name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className={classes["error-text"]}>
                Lastname must not be empty
              </p>
            )}
          </div>

          <div className={classes["input__control"]}>
            <input
              type="email"
              className={classes[emailHasError ? "invalid" : "input"]}
              placeholder="Email Address"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes["error-text"]}>Email must include @</p>
            )}
          </div>
      
          <div className={classes["input__control"]}>
            <input
              className={classes[emailHasError ? "invalid" : "input"]}
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className={classes["error-text"]}>
                Password must be at least six letters
              </p>
            )}
          </div>

          <div className={classes["forget_password"]}>Forget Password?</div>
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

export default SignIn;
