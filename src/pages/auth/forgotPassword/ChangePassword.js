import { useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import classes from "./ChangePassword.module.css";
// import AuthContext from "../../store/auth-context";
import VerifiedChangePassword from "./VerifiedChangePassword";
import SignInNav from "../../../layout/Navigation/SignInNav";
import useInput from "../../../hook/use-input";
import axios from "axios";

const isNotEmpty = (value) => value.trim() !== "";

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
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid) {
    formIsValid = true;
  }

  // const history = useHistory();

  // const authCtx = useContext(AuthContext);

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

    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDXFa7ElAN-91B8g1G1Ebc3NtWHwxHj3gY",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       // idToken: authCtx.token,
    //       email: enteredNewEmail,
    //       // returnSecureToken: false,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then((res) => {
    //   history.replace("/login");
    // });
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
