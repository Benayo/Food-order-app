import React from "react";
import axios from "axios";
import { useState } from "react";

import Modal from "../../../../components/UI/Modal";
import classes from "../SignUp.module.css";
import VerifyEmail from "../components/VerifyEmail";
import useInput from "../../../../hook/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const VendorInfoSignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [httpError, setHttpError] = useState(false);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);

  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountry,
  } = useInput(isNotEmpty);

  const {
    value: detailsValue,
    isValid: detailsIsValid,
    hasError: detailsHasError,
    valueChangeHandler: detailsChangeHandler,
    inputBlurHandler: detailsBlurHandler,
    reset: resetDetails,
  } = useInput(isNotEmpty);

  const closeVerifyEmailHandler = () => {
    setIsLoggedIn(false);
  };

  let formIsValid = false;

  if (addressIsValid && cityIsValid && countryIsValid && detailsIsValid) {
    formIsValid = true;
  }

  const role = "vendor";
  const first_name = props.onAddVendor.firstName;
  const last_name = props.onAddVendor.lastName;
  const store_name = props.onAddVendor.restaurantValue;
  const email = props.onAddVendor.email;
  const phone = props.onAddVendor.phone;
  const password = props.onAddVendor.password;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(email, store_name, phone, password);

    setIsLoading(true);

    axios
      .post("https://foodblogafrika.herokuapp.app/api/v1/auth/register", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        store_name: store_name,
        phone: phone,
        password: password,
        role: role,
        store_address: addressValue,
        store_state: cityValue,
        store_country: countryValue,
        store_description: detailsValue,
      })
      .then((response) => {
        setIsLoading(false);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.response.data.msg);
      });

    resetAddress();
    resetCity();
    resetCountry();
    resetDetails();
  };

  if (isLoggedIn) {
    return <VerifyEmail onCancel={closeVerifyEmailHandler} />;
  }

  return (
    <Modal onCancel={props.onCancel}>
      {/* {isLoggedIn && <VerifyEmail />} */}

      <div className=" px-0 py-2">
        <div className="flex justify-between items-baseline">
          <h1 className=" text-xl md:text-2xl font-medium mb-1 md:mb-2">
            👌🏻 You're almost there! {store_name},
          </h1>

          <button
            onClick={props.onCancel}
            className="  p-2 rounded-md bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <p className=" text-xs md:text-sm text-gray-600 mb-4">
          Please, provide the additional information about your restuarant to
          get your account active
        </p>
        <div className="border-t border-gray-200 w-full"></div>
        <div className={classes["http-error-text"]}>{httpError}</div>
        <form onSubmit={submitHandler}>
          <div className={classes["input__control"]}>
            <input
              className={classes[addressHasError ? "invalid" : "input"]}
              type="text"
              placeholder="Restuarant Address"
              value={addressValue}
              onBlur={addressBlurHandler}
              onChange={addressChangeHandler}
            />
            {addressHasError && (
              <p className={classes["error-text"]}>Address is required</p>
            )}
          </div>
          <div className={classes["input__control"]}>
            <input
              className={classes[cityHasError ? "invalid" : "input"]}
              type="text"
              placeholder="Restuarant city"
              value={cityValue}
              onBlur={cityBlurHandler}
              onChange={cityChangeHandler}
            />
            {cityHasError && (
              <p className={classes["error-text"]}>City is required</p>
            )}
          </div>
          <div className={classes["input__control"]}>
            <input
              className={classes[countryHasError ? "invalid" : "input"]}
              type="text"
              placeholder="Restuarant country"
              value={countryValue}
              onBlur={countryBlurHandler}
              onChange={countryChangeHandler}
            />
            {countryHasError && (
              <p className={classes["error-text"]}>Country is required</p>
            )}
          </div>
          <div className={classes["input__control"]}>
            <textarea
              className={classes[detailsHasError ? "invalid" : "input"]}
              type="text"
              placeholder="Briefly describe your restuarant"
              cols="30"
              rows="10"
              value={detailsValue}
              onBlur={detailsBlurHandler}
              onChange={detailsChangeHandler}
            />
            {detailsHasError && (
              <p className={classes["error-text"]}>Details is required</p>
            )}
          </div>

          <div className="flex justify-center items-center ">
            <button
              onClick={props.onCancel}
              className="py-2.5 px-8 cursor-pointer  border  border-tertiary-100  text-tertiary-100 rounded-md text-sm md:text-base"
            >
              Go back
            </button>
            <button className=" py-3 px-8  cursor-pointer  rounded-md  bg-primary ml-4 text-white-100  text-sm md:text-base">
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default VendorInfoSignUp;
