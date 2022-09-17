import React from "react";

import Modal from "../../components/UI/Modal";
import { Link } from "react-router-dom";

const ConfirmPassword = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <div className="flex flex-col justify-center items-center">
        <div className="my-8 max-w-sm ">
          <img src="/verifyemail.png" alt="verify-email" className="w-full" />
        </div>
        <h1 className="text-xl md:text-2xl mb-4">Congratulations</h1>
        <div className=" mb-12  text-sm  md:text-base text-gray-600 text-center">
          Your new password has been set and authorized.
        </div>
        <div className=" mt-8  mb-2 text-sm  md:text-base text-gray-600 text-center">
          Didn’t receive the email? Check your spam or
          <Link
            className=" underline text-blue-800 cursor-pointer"
            to="/dashboard"
          >
            Back To Dashboard
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmPassword;
