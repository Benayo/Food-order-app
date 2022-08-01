import React from "react";

import LoginNav from "../layout/Navigation/LoginNav";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <LoginNav />

      <div className={classes.container}>
        <div className={classes["text__main"]}>Welcome Back</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>
        <form action="submit">
          <input
            type="email"
            name="text"
            required
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
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

export default Login;
