import React, { useState } from "react";

import classes from "./SignUp.module.css";
import SignUpNav from "./navigation/SignUpNav";
import UserSignIn from "./UserSignUp/UserSignUp";
import VendorSignUp from "./VendorSignUp/VendorSignUp";
import VendorInfoSignUp from "./VendorSignUp/VendorInfoSignUp";

const SignIn = (props) => {
  const [showUserSignIn, setShowUserSignIn] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const [vendorDetails, setVendorDetails] = useState(false);
  const [vendor, setVendor] = useState();

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

  const onAddVendorHandler = (vendorData) => {
    setVendorDetails(true);
    setVendor(vendorData);
  };

  const toggleCloseVendorModal = () => {
    setVendorDetails(false);
  };

  return (
    <section>
      <SignUpNav />
      {vendorDetails && (
        <VendorInfoSignUp
          onAddVendor={vendor}
          onCancel={toggleCloseVendorModal}
        />
      )}
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
        {!showUserSignIn && (
          <VendorSignUp onAddVendorDetails={onAddVendorHandler} />
        )}
      </div>
    </section>
  );
};

export default SignIn;
