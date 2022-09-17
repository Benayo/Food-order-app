import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/UI/Modal";

const ResetPasswordConfirmed = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <div className="flex flex-col justify-center items-center">
        <div className="my-8 max-w-sm ">
          <img
            src="/check_circle_black_24dp 2.png"
            alt="verified"
            className=" h-24 md:h-32 w-24 md:w-32 mb-8"
          />{" "}
        </div>
        <h1 className="text-xl md:text-2xl mb-4">Congratulations!</h1>
        <div className=" mb-12  text-sm  md:text-base text-gray-600 text-center">
          You have successfully changed your password. Please proceed to login
          and sign in.
        </div>

        <Link
          to="/auth/login"
          className=" underline font-bold text-blue-800 cursor-pointer"
        >
          Login
        </Link>
      </div>
    </Modal>
  );
};

export default ResetPasswordConfirmed;
