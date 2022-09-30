import { useRef, useState } from "react";

import classes from "./ChangePassword.module.css";

import VerifiedChangePassword from "./VerifiedChangePassword";
import SignInNav from "../SignUp/navigation/SignUpNav";
import useInput from "../../../hook/use-input";
import axios from "axios";

const isEmail = (value) => value.includes("@");

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");
  const [error, setError] = useState(false);
  const [onConfirmEmail, setOnConfirmEmail] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (emailIsValid) {
    formIsValid = true;
  }

  const newEmailInputRef = useRef();

  const toggleCloseNavigationHandler = () => {
    setOnConfirmEmail(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enteredNewEmail = newEmailInputRef.current.value;

    setIsLoading(true);
    axios
      .post("https://foodblogafrika.herokuapp.com/api/v1/auth/forgetpassword", {
        email: enteredNewEmail,
      })
      .then((res) => {
        setIsLoading(false);
        setOnConfirmEmail(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        if (error.response) {
          setHttpError(error.response.data.msg);
        }
      });

    resetEmail();
  };

  return (
    <section>
      <SignInNav />
      {onConfirmEmail && (
        <VerifiedChangePassword onCancel={toggleCloseNavigationHandler} />
      )}
      <div className=" flex flex-col justify-center items-center  h-screen px-[10%]  md:px-[20%] xl:px-[32%]  2xl:w-[80%]">
        <h1 className="mb-6 text-2xl md:text-4xl">Account recovery</h1>
        <div className="text-xs md:text-sm  justify-center items-center text-center mb-8">
          Thank U
          To help keep your account safe, FOODBLOG AFRIKA wants to make sure
          it’s really you trying to sign in.
        </div>

        <form onSubmit={submitHandler} className={classes.form}>
          {error && <p className={classes["error-text"]}>{httpError}</p>}
          <div className={classes.control}>
            <input
              className={classes[emailHasError ? "invalid" : "input"]}
              placeholder="Kindly enter your email here"
              type="text"
              ref={newEmailInputRef}
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes["error-text"]}>Email required!</p>
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

export default ChangePassword;
