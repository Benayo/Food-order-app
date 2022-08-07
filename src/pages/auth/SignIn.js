import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./SignIn.module.css";
import AuthContext from "../../store/auth-context";
import SignInNav from "../../layout/Navigation/SignInNav";

const SignIn = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (event.target.value.includes() === "@") {
      setEnteredEmailIsValid(true);
    }
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
    }
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    if (enteredEmail.includes() !== "@") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    setEnteredEmailIsValid(true);

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXFa7ElAN-91B8g1G1Ebc3NtWHwxHj3gY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
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
            console.log(data);
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

    setEnteredEmail("");
  };

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

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
              className={classes[nameInputIsInValid ? "invalid" : "input"]}
              type="text"
              placeholder="Full name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameInputBlurHandler}
            />
            {nameInputIsInValid && (
              <p className={classes["error-text"]}>
                First name must not be empty
              </p>
            )}
          </div>

          <div className={classes["input__control"]}>
            <input
              type="email"
              className={classes[emailInputIsInValid ? "invalid" : "input"]}
              placeholder="Email Address"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {nameInputIsInValid && (
              <p className={classes["error-text"]}>Email must include @</p>
            )}
          </div>
          <div className={classes["input__control"]}>
            <input type="number" placeholder="Phone Number" />
          </div>
          <div className={classes["input__control"]}>
            <input
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={classes["input__control"]}>
            <input type="password" placeholder="Verify Password" />
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
