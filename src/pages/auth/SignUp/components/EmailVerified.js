import axios from "axios";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SignUpNav from "../navigation/SignUpNav";

const EmailVerified = () => {
  const [validUrl, setValidUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");
  const verificationToken = queryParams.get("verificationToken");

  useEffect(() => {
    setIsLoading(true);
    axios
      .post("https://foodblogafrika.herokuapp.app/api/v1/auth/verify", {
        email: email,
        verificationToken: verificationToken,
      })
      .then(function (res) {
        setIsLoading(false);
        setValidUrl(true);
      })
      .catch(function (error) {
        setIsLoading(false);
        setValidUrl(false);
      });
  }, [email, verificationToken]);

  return (
    <Fragment>
      <SignUpNav />
      {isLoading && (
        <div className="flex items-center justify-center h-screen  ">
          Loading...
        </div>
      )}
      <div className="flex items-center h-screen  px-[1rem] md:px-[3.75rem]">
        {validUrl ? (
          <div className=" flex flex-col">
            <img
              src="/check_circle_black_24dp 2.png"
              alt="verified"
              className=" h-24 md:h-32 w-24 md:w-32 mb-8"
            />{" "}
            <h1 className="text-2xl md:text-4xl font-medium mb-4">
              Congratulations
            </h1>{" "}
            <p className="text-sm md:text-base mb-8">
              Email verified successfully. Please proceed to login and sign in.
            </p>{" "}
            <Link
              to="/auth/login"
              className="py-4 px-6 bg-primary rounded-lg text-white-100  cursor-pointer w-fit"
            >
              Back To Login
            </Link>
          </div>
        ) : (
          <div> 404 not Found</div>
        )}
      </div>
    </Fragment>
  );
};

export default EmailVerified;
