import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

import Modal from "../../../../components/UI/Modal";

const VerifyEmail = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <div className="flex flex-col justify-center items-center">
        <div className="my-8 max-w-sm ">
          <img src="/verifyemail.png" alt="verify-email" className="w-full" />
        </div>
        <h1 className="text-xl md:text-2xl mb-4">Check your mail</h1>
        <div className=" mb-12  text-sm  md:text-base text-gray-600 text-center">
          Please follow the link in your mail and verify your account
        </div>
        <div className=" mt-8  mb-2 text-sm  md:text-base text-gray-600 text-center">
          Didn’t receive the email? Check your spam or
          <div
            className=" underline text-blue-800 cursor-pointer"
            onClick={props.onCancel}
          >
            try another email address.
          </div>
        </div>

        <Link
          className="text-sm md:text-base mt-4 text-blue-800  "
          to="/auth/login"
        >
          Go to Login
        </Link>
      </div>
    </Modal>
  );
};

export default VerifyEmail;
