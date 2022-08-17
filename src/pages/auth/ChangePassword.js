import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./ChangePassword.module.css";
import AuthContext from "../../store/auth-context";
import SignInNav from "../../layout/Navigation/SignInNav";
import useInput from "../../hook/use-input";

const isPassword = (value) => value.length > 6;

const ChangePassword = () => {
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if (passwordIsValid) {
    formIsValid = true;
  }

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const newPasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDXFa7ElAN-91B8g1G1Ebc3NtWHwxHj3gY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/login");
    });
    resetPassword();
  };

  return (
    <section>
      <SignInNav />
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="new-password">Please enter your new password.</label>
          <input
            className={classes[passwordHasError ? "invalid" : "input"]}
            placeholder='Password'
            type="password"
            id="new-password"
            minLength="7"
            ref={newPasswordInputRef}
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
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
    </section>
  );
};

export default ChangePassword;
