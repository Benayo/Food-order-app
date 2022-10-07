import classes from "./ResetUserPassword.module.css";

import axios from "axios";

import UserNav from "../DashBoard/Users/navigation/UserNav";
import useInput from "../../hook/use-input";
import { useRef } from "react";
import { useState } from "react";
import ConfirmPassword from "./ConfirmPassword";

const isPassword = (value) => value.length > 6;

const ResetUserPassword = () => {
  const storedData = JSON.parse(localStorage.getItem("userData"));

  const oldPasswordValue = storedData.password;

  const queryParams = new URLSearchParams(window.location.search);

  const resetPasswordTokenValue = queryParams.get("resetpasswordToken");

  const [onConfirmPassword, setOnConfirmPassword] = useState(false);

  const emailValue = queryParams.get("email");

  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");
  const [error, setError] = useState(false);

  const {
    value: newPasswordValue,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetNewPassword,
  } = useInput(isPassword);

  const newPasswordInputRef = useRef();

  let formIsValid = false;

  if (newPasswordIsValid) {
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

    const enteredNewPassword = newPasswordInputRef.current.value;

    setIsLoading(true);
    axios
      .post("https://foodblogafrika.cyclic.app/api/v1/auth/resetnewpassword", {
        email: emailValue,
        oldPassword: oldPasswordValue,
        newPassword: enteredNewPassword,
        passwordToken: resetPasswordTokenValue,
      })
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

    resetNewPassword();

    setIsLoading(false);
  };

  return (
    <section>
      <UserNav />

      {onConfirmPassword && (
        <ConfirmPassword onCancel={toggleCloseNavigationHandler} />
      )}
      <div className={classes.profile}>
        <h1>Reset password</h1>

        {error && <p className={classes["error-text"]}>{httpError}</p>}

        <form className={classes.form} onSubmit={submitHandler}>
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
