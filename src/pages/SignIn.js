import React from "react";

import SignInNav from "../layout/Navigation/SignInNav";
import classes from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div>
      <SignInNav />

      <div className={classes.container}>
        <div className={classes["text__main"]}>Let's get you started</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>
        <form action="submit">
          <input type="text" name="text" required placeholder="First Name" />
          <input type="text" name="text" required placeholder="Last Name" />
          <input
            type="email"
            name="text"
            required
            placeholder="Email Address"
          />
          <input
            type="numeric"
            name="numeric"
            required
            placeholder="Phone Number"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Verify Password"
          />
        </form>
        <div className={classes["forget_password"]}>Forget Password?</div>
        <div className={classes.terms}>
          By continuing, I represent that I have read, understand, and fully
          agree to the FOODBLOG <span>terms of service</span> and{" "}
          <span>privacy policy</span> .
        </div>
        <button className={classes.btn}>Continue</button>
      </div>
    </div>
  );
};

export default SignIn;
