import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";

import useInput from "../../../hook/use-input";

import SignInNav from "../../../layout/Navigation/SignInNav";
import VerifiedChangePassword from "./VerifiedChangePassword";
import classes from "./ChangePassword.module.css";

const isPassword = (value) => value.length > 6;

const SetNewPassword = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyNewPassword, setVerifyNewPassword] = useState(false);
  const [error, setError] = useState(false);
  const [httpError, setHttpError] = useState("");

  const queryParams = new URLSearchParams(window.location.search);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  const emailValue = queryParams.get("email");

  const resetPasswordTokenValue = queryParams.get("resetpasswordToken");

  const newPasswordInputRef = useRef();

  let formIsValid = false;

  if (passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enteredNewPassword = newPasswordInputRef.current.value;

    setIsLoading(true);

    axios
      .post("https://foodblogafrika.herokuapp.com/api/v1/auth/resetpassword", {
        email: emailValue,
        password: enteredNewPassword,
        passwordToken: resetPasswordTokenValue,
      })
      .then((res) => {
        setValidUrl(true);
        setIsLoading(false);
        setVerifyNewPassword(true);
      })
      .catch((error) => {
        setValidUrl(false);
        setError(true);
        if (error.response) {
          setHttpError(error.response.data.msg);
        }
      });

    resetPassword();
  };

  return (
    <section>
      {verifyNewPassword && <VerifiedChangePassword />}
      <SignInNav />

      <div className=" flex flex-col justify-center items-center  h-screen px-[10%]  md:px-[20%] xl:px-[32%]  2xl:w-[80%]">
        {validUrl ? (
          <div>
            {" "}
            <h1 className="mb-6 text-2xl md:text-4xl">Create new password</h1>
            <div className="text-xs md:text-sm  justify-center items-center text-center mb-8">
              Your new password must be different from previous used password.
            </div>
            <form onSubmit={submitHandler} className={classes.form}>
              {error && <p className={classes["error-text"]}>{httpError}</p>}
              <div className={classes.control}>
                <input
                  className={classes[passwordHasError ? "invalid" : "input"]}
                  placeholder="Kindly enter your new password here"
                  type="text"
                  ref={newPasswordInputRef}
                  value={passwordValue}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordHasError && (
                  <p className={classes["error-text"]}>
                    Password should be atleast 6 or more characters
                  </p>
                )}
              </div>
              <div className={classes.action}>
                <button>{!isLoading ? "Reset Password" : "Loading..."}</button>
              </div>
            </form>
          </div>
        ) : (
          <div>404 Not Found</div>
        )}
      </div>
    </section>
  );
};

export default SetNewPassword;
