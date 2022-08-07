import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import LoginNav from "../../layout/Navigation/LoginNav";
import classes from "./Login.module.css";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailError, setEnteredEmailError] = useState("");

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordError, setEnteredPasswordError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const emailChangeHandler = (event) => {
    setSuccessMsg("");
    setEnteredEmailError("");
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setSuccessMsg("");
    setEnteredPasswordError("");
    setEnteredPassword(event.target.value);
  };

  //submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredEmail !== "") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(enteredEmail)) {
        setEnteredEmailError("");
      } else {
        setEnteredEmailError("Invalid Email");
      }
    } else {
      setEnteredEmailError("Email Required");
    }

    if (enteredPassword !== "") {
    } else {
      setEnteredPasswordError("Password Required");
    }
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXFa7ElAN-91B8g1G1Ebc3NtWHwxHj3gY",
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
    setEnteredPassword("");
  };

  return (
    <div>
      <LoginNav />
      {successMsg&& <div>Congratulations</div>}

      <div className={classes.container}>
        <div className={classes["text__main"]}>Welcome Back</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>
        <form autoComplete="off" onSubmit={submitHandler}>
          <div className={classes["input__control"]}>
            <input
              type="email"
              placeholder="Email Address"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
            {enteredEmailError && (
              <div className={classes["error-text"]}>{enteredEmailError}</div>
            )}
          </div>
          <div className={classes["input__control"]}>
            <input
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              value={enteredPassword}
            />
            {enteredPasswordError && (
              <div className={classes["error-text"]}>
                {enteredPasswordError}
              </div>
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

export default Login;
