import React, { useState } from "react";
import axios from "axios";

import classes from "../SignUp.module.css";
import useInput from "../../../../hook/use-input";
import VerifyEmail from "../components/VerifyEmail";

const isPassword = (value) => value.length > 6;
const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

const UserSignUp = () => {
  const [httpError, setHttpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordError, setPasswordError] = useState(false);

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
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput(isPassword);

  const role = "user";

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneNumberIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const toggleConfirmPasswordType = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");

      return;
    }

    setConfirmPasswordType("password");
  };

  const toggleCloseNavigationHandler = () => {
    setIsLoggedIn(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (passwordValue !== confirmPasswordValue) {
      setPasswordError(true);

      return;
    }

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);

    axios
      .post("https://foodblogafrika.herokuapp.com/api/v1/auth/register", {
        email: emailValue,
        password: passwordValue,
        phone: phoneNumberValue,
        first_name: firstNameValue,
        last_name: firstNameValue,
        role: role,
      })
      .then(function (response) {
        setIsLoading(false);
        setIsLoggedIn(true);
      })

      .catch(function (error) {
        setIsLoading(false);
        setHttpError(error.response.data.msg);
      });

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();
    resetPassword();
    resetConfirmPassword();
  };

  return (
    <section>
      {isLoggedIn && <VerifyEmail onCancel={toggleCloseNavigationHandler} />}
      <div className={classes["http-error-text"]}>{httpError}</div>
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
            <p className={classes["error-text"]}>Firstname must not be empty</p>
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
            <p className={classes["error-text"]}>Lastname must not be empty</p>
          )}
        </div>
        <div className={classes["input__control"]}>
          <input
            type="number"
            className={classes[phoneNumberHasError ? "invalid" : "input"]}
            placeholder="Phone Number"
            value={phoneNumberValue}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
          />
          {phoneNumberHasError && (
            <p className={classes["error-text"]}>Phone Number is required!</p>
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
            span
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
        <div>
          {passwordHasError && (
            <p className={classes["error-text"]}>
              Password must be at least six letters
            </p>
          )}
        </div>

        <div
          className={`${classes["input__control"]} ${classes["input__password"]}`}
        >
          <input
            className={`${
              classes[confirmPasswordHasError ? "invalid" : "input"]
            } ${classes[passwordError ? "invalid" : "input"]}`}
            type={confirmPasswordType}
            placeholder="Comfirm Password"
            value={confirmPasswordValue}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            span
          />

          <i
            className="absolute  z-20 px-6 pt-2 cursor-pointer"
            onClick={toggleConfirmPasswordType}
          >
            {confirmPasswordType === "password" ? (
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
          {confirmPasswordHasError && (
            <p className={classes["error-text"]}>
              Password must be at least six letters
            </p>
          )}

          {passwordError && (
            <p className="text-red-600 text-xs inline-block">
              Password do not match
            </p>
          )}
        </div>

        <div className={classes.terms}>
          By continuing, I represent that I have read, understand, and fully
          agree to the FOODBLOG <span>terms of service</span> and{" "}
          <span>privacy policy</span> .
        </div>
        <button className={classes.btn}>
          {!isLoading ? "Continue" : "Loading..."}
        </button>
      </form>
    </section>
  );
};

export default UserSignUp;
