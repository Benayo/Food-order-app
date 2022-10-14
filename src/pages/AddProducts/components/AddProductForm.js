import axios from "axios";
import React, { useContext, useState } from "react";

import useInput from "../../../hook/use-input";
import AuthContext from "../../../store/auth-context";
import classes from "../AddProducts.module.css";
import ProductAdded from "./ProductAdded";

const isNotEmpty = (value) => value.trim() !== "";

const AddProductForm = (props) => {
  // const [showCategoryList, setShowCategoryList] = useState(false);
  const [imageValue, setImageValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput(isNotEmpty);

  const {
    value: detailsValue,
    isValid: detailsIsValid,
    hasError: detailsHasError,
    valueChangeHandler: detailsChangeHandler,
    inputBlurHandler: detailsBlurHandler,
    reset: resetDetails,
  } = useInput(isNotEmpty);

  const categories = ["one", "two", "three"];

  const categoryChangeHandler = (event) => {
    setCategoryValue(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageValue(event.target.files);
  };

  let formIsValid = false;

  if (nameIsValid && priceIsValid && detailsIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);

    // axios
    //   .post("https://foodblogafrika.herokuapp.com/api/v1/product", {
    //     token: token,
    //     name: nameValue,
    //     price: priceValue,
    //     image: imageValue,
    //     description: detailsValue,
    //     category: categoryValue,
    //   })
    //   .then((response) => {
    //     setIsLoading(false);
    //     setIsAdded(true);
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     setHttpError(error.response.data.msg);
    //   });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      // key: "value",
      name: nameValue,
      price: priceValue,
      image: imageValue,
      description: detailsValue,
      category: categoryValue,
    };

    axios
      .post(
        "https://foodblogafrika.herokuapp.com/api/v1/product",
        bodyParameters,
        config
      )
      .then((response) => {
        setIsLoading(false);
        setIsAdded(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.response.data.msg);
        console.log(httpError);
      });

    // resetName();
    // resetPrice();
    // resetDetails();
  };

  return (
    <section>
      {isAdded && <ProductAdded />}
      {<div className={classes["error-text--1"]}>{httpError}</div>}
      <form onSubmit={submitHandler}>
        <div className={classes["input__control"]}>
          <input
            className={classes[nameHasError ? "invalid" : "input"]}
            type="text"
            placeholder="Food name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className={classes["error-text"]}>Food name is required!</p>
          )}
        </div>

        <div className={classes["input__control"]}>
          <input
            className={classes[priceHasError ? "invalid" : "input"]}
            type="number"
            placeholder="Food price"
            value={priceValue}
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
          />
          {priceHasError && (
            <p className={classes["error-text"]}>Food price is required!</p>
          )}
        </div>

        <div className={classes["input__control"]}>
          <select
            value={categoryValue}
            onChange={categoryChangeHandler}
            className="bg-gray-200 w-full h-12 rounded-md px-3 my-4 "
          >
            <option>Choose a category</option>
            {categories.map((category, index) => {
              return <option key={index}>{category}</option>;
            })}
          </select>
          <button
            type="button"
            onClick={props.onCategory}
            className=" flex justify-end items-center  w-full text-sm pb-2 text-primary cursor-pointer"
          >
            Create category +
          </button>
        </div>

        <div className={classes["input__control"]}>
          <label
            className="block font-normal text-xs mt-4 mb-0 text-black "
            htmlFor="image"
          >
            Upload image
          </label>
          <input
            id="image"
            className={classes["input"]}
            type="file"
            // value={imageValue}
            onChange={imageChangeHandler}
          />
        </div>
        <div className={classes["input__control"]}>
          <textarea
            className={classes[detailsHasError ? "invalid" : "input"]}
            cols="20"
            rows="10"
            type="number"
            placeholder="Briefly describe the food item"
            value={detailsValue}
            onChange={detailsChangeHandler}
            onBlur={detailsBlurHandler}
          />
          {detailsHasError && (
            <p className={classes["error-text"]}>Description is required!</p>
          )}

          <div className="py-4">
            <div className="text-sm">+10 items Added</div>
          </div>

          <div className={classes["action--btn"]}>
            <button className={classes["btn--full"]}>
              {isLoading ? "Loading..." : "Upload Item"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProductForm;
