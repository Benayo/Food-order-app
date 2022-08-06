import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./SignIn.module.css";
import AuthContext from "../../store/auth-context";
import SignInNav from "../../layout/Navigation/SignInNav";

const SignIn = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

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
  };

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  return (
    <div>
      {!isLoggedIn && <SignInNav />}
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
              name="text"
              placeholder="First Name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameInputBlurHandler}
            />
            {nameInputIsInValid && (
              <p className={classes["error-text"]}>Name must not be empty</p>
            )}
          </div>

          <div className={classes["input__control"]}>
            <input type="text" name="text" placeholder="Last Name" />
          </div>
          <div className={classes["input__control"]}>
            <input
              type="email"
              name="text"
              placeholder="Email Address"
              ref={emailInputRef}
            />
          </div>
          <div className={classes["input__control"]}>
            <input type="numeric" name="numeric" placeholder="Phone Number" />
          </div>
          <div className={classes["input__control"]}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </div>
          <div className={classes["input__control"]}>
            <input
              type="password"
              name="password"
              placeholder="Verify Password"
            />
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
