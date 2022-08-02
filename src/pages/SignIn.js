import React, { useState, useRef} from "react";

import SignInNav from "../layout/Navigation/SignInNav";
import classes from "./SignIn.module.css";
// import AuthContext from "../../store/auth-context";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredFirstname = firstnameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXFa7ElAN-91B8g1G1Ebc3NtWHwxHj3gY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          firstname: enteredFirstname,
          lastname: enteredLastname,
          phonenumber: enteredPhone,
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
        // authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <SignInNav />

      <div className={classes.container}>
        <div className={classes["text__main"]}>Let's get you started</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="text"
            required
            placeholder="First Name"
            ref={firstnameInputRef}
          />
          <input
            type="text"
            name="text"
            required
            placeholder="Last Name"
            ref={lastnameInputRef}
          />
          <input
            type="email"
            name="text"
            required
            placeholder="Email Address"
            ref={emailInputRef}
          />
          <input
            type="numeric"
            name="numeric"
            required
            placeholder="Phone Number"
            ref={phoneInputRef}
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            ref={passwordInputRef}
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Verify Password"
            ref={passwordInputRef}
          />

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
