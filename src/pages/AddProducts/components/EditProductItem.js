import React from "react";
import { useState } from "react";
import Modal from "../../../components/UI/Modal";

import classes from "../AddProducts.module.css";

const EditProductItem = (props) => {
  const [showCategoryList, setShowCategoryList] = useState(false);

  const showCategoryDropDownHandler = () => {
    if (!showCategoryList) {
      setShowCategoryList(true);
      return;
    }

    setShowCategoryList(false);
  };
  return (
    <Modal onCancel={props.onCancel}>
      <form className="m-0 p-0 max-h-[35rem] md:max-h-[32rem]   xl:max-h-[40rem] overflow-scroll ">
        <div className="border-b border-gray-300 my-2 pb-4 mx-4 md:mx-10 text-xl ">
          Edit Item
        </div>

        <div className="mb-[0.2rem] mx-4 md:mx-10">
          <input
            className={classes["input"]}
            type="text"
            placeholder="Food name"
          />
          {<p className={classes["error-text"]}>Food name is required!</p>}
        </div>

        <div className="mb-[1rem] mx-4 md:mx-10">
          <input
            className={classes["input"]}
            type="number"
            placeholder="Food price"
          />
          {<p className={classes["error-text"]}>Food price</p>}
        </div>

        <div className="mb-[0.2rem]  mx-4 md:mx-10  cursor-pointer relative">
          <button
            onClick={showCategoryDropDownHandler}
            className="h-full  w-full outline-none bg-gray-200 rounded-md px-4  py-2 flex items-center justify-between cursor-pointer"
            type="button"
          >
            <label className="text-sm text-placeholder  py-1 px-1.25">
              Select food category
            </label>
            {!showCategoryList ? (
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
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
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </button>
          {showCategoryList && (
            <div className="absolute flex flex-col justify-center items-center  bg-gray-100 w-full   rounded-md  shadow-sm">
              <div className="pt-3 text-gray-400 text-sm">
                No category selected
              </div>
              <ul className="border-t border-gray-200 w-full flex flex-col justify-center items-center my-3 ">
                <li className="py-2 cursor-pointer">Beans</li>
                <div className=" border-b border-gray-200 w-full"></div>
                <li className="py-2 cursor-pointer">Rice</li>
                <div className=" border-b border-gray-200 w-full"></div>
              </ul>

              <button
                type="button"
                onClick={props.onCategory}
                className=" pb-2 text-primary cursor-pointer"
              >
                Create category +
              </button>
            </div>
          )}
        </div>

        <div className="mb-[0.2rem] mx-4 md:mx-10 cursor-pointer">
          <label
            className="block font-normal text-xs mt-4 mb-0 text-black "
            for="image"
          >
            Upload image
          </label>
          <input
            id="image"
            className={classes["input"]}
            type="file"
            placeholder="Item category"
          />
        </div>

        <div className="mb-[0.2rem] mx-4 md:mx-10">
          <textarea
            className={classes["input"]}
            cols="20"
            rows="10"
            type="number"
            placeholder="Briefly describe the food item"
          />
          {<p className={classes["error-text"]}>Description is required!</p>}

          <div className="py-4">
            <div className="text-sm">+10 items Added</div>
          </div>

          <div className={classes["action--btn"]}>
            <button onClick={props.onCancel} className={classes["btn--stroke"]}>
              Cancel
            </button>
            <button className={classes["btn--full"]}>Save</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditProductItem;
