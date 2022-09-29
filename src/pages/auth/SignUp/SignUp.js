import React, { useState } from "react";

import classes from "./SignUp.module.css";
import SignUpNav from "./navigation/SignUpNav";
import UserSignIn from "./UserSignUp/UserSignUp";
import VendorSignUp from "./VendorSignUp/VendorSignUp";

const SignIn = () => {
  const [showUserSignIn, setShowUserSignIn] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const toggleUserSignIn = () => {
    setShowUserSignIn(true);

    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const toggleVendorSignIn = () => {
    setShowUserSignIn(false);

    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div>
      <SignUpNav />
      <div className={classes.container}>
        <div className={classes["text__main"]}>Let's get you started</div>
        <div className={classes["text__sub"]}>
          To continue, please provide your credentials below.
        </div>
        <div className="flex items-center mt-6 font-body text-sm  ">
          <button
            onClick={toggleUserSignIn}
            className={`${classes["toggle--btn"]} ${
              classes[isActive ? "toggle--btn--active" : ""]
            }`}
          >
            I'm a User
          </button>
          <button
            onClick={toggleVendorSignIn}
            className={`${classes["toggle--btn"]} ${
              classes[!isActive ? "toggle--btn--active" : ""]
            }`}
          >
            I'm a Vendor
          </button>
        </div>
        {showUserSignIn && <UserSignIn />}
        {!showUserSignIn && <VendorSignUp />}
      </div>
    </div>
  );
};

export default SignIn;
