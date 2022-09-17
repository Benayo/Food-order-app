import classes from "./ResetUserPassword.module.css";

import axios from "axios";

import DashboardNav from "../../layout/DashBoardNav/DashboardNav";
import useInput from "../../hook/use-input";
import { useRef } from "react";
import { useState } from "react";
import ConfirmPassword from "./ConfirmPassword";

const isPassword = (value) => value.length > 6;

const ResetUserPassword = () => {
  const storedData = JSON.parse(localStorage.getItem("userData"));

  const oldPassword = storedData.password;

  console.log(oldPassword);
  const queryParams = new URLSearchParams(window.location.search);

  const resetPasswordTokenValue = queryParams.get("resetpasswordToken");

  const [onConfirmPassword, setOnConfirmPassword] = useState(false);

  const emailValue = queryParams.get("email");

  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");
  const [error, setError] = useState(false);

  const {
    value: oldPasswordValue,
    isValid: oldPasswordIsValid,
    hasError: oldPasswordHasError,
    valueChangeHandler: oldPasswordChangeHandler,
    inputBlurHandler: oldPasswordBlurHandler,
    reset: resetOldPassword,
  } = useInput(isPassword);

  const {
    value: newPasswordValue,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetNewPassword,
  } = useInput(isPassword);

  const oldPasswordInputRef = useRef();
  const newPasswordInputRef = useRef();

  let formIsValid = false;

  if (oldPasswordIsValid && newPasswordIsValid) {
    formIsValid = true;
  }

  const toggleCloseNavigationHandler = () => {
    setOnConfirmPassword(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enteredOldPassword = oldPasswordInputRef.current.value;
    const enteredNewPassword = newPasswordInputRef.current.value;

 

    setIsLoading(true);
    axios
      .post(
        "https://foodblogafrika.herokuapp.com/api/v1/auth/resetnewpassword",
        {
          email: emailValue,
          oldPassword: enteredOldPassword,
          newPassword: enteredNewPassword,
          passwordToken: resetPasswordTokenValue,
        }
      )
      .then((res) => {
        setIsLoading(false);
        setOnConfirmPassword(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);

        if (error.response) {
          setHttpError(error.response.data.msg);
        }
      });

    resetOldPassword();
    resetNewPassword();

    setIsLoading(false);
  };

  return (
    <section>
      <DashboardNav />

      {onConfirmPassword && (
        <ConfirmPassword onCancel={toggleCloseNavigationHandler} />
      )}
      <div className={classes.profile}>
        <h1>Reset password</h1>

        {error && <p className={classes["error-text"]}>{httpError}</p>}

        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <input
              className={classes[oldPasswordHasError ? "invalid" : "input"]}
              placeholder="Old password"
              type="oldPassword"
              ref={oldPasswordInputRef}
              value={oldPasswordValue}
              onChange={oldPasswordChangeHandler}
              onBlur={oldPasswordBlurHandler}
            />
            {oldPasswordHasError && (
              <p className={classes["error-text"]}>Old password required!</p>
            )}
          </div>

          <div className={classes.control}>
            <input
              className={classes[newPasswordHasError ? "invalid" : "input"]}
              placeholder="New password"
              type="newPassword"
              ref={newPasswordInputRef}
              value={newPasswordValue}
              onChange={newPasswordChangeHandler}
              onBlur={newPasswordBlurHandler}
            />
            {newPasswordHasError && (
              <p className={classes["error-text"]}>New password required!</p>
            )}
          </div>

          <div className={classes.action}>
            <button>{!isLoading ? "Send Verification" : "Loading..."}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetUserPassword;
