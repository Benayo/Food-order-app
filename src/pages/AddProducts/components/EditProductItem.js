import React from "react";
import Modal from "../../../components/UI/Modal";

import classes from "../AddProducts.module.css";

const EditProductItem = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <form className="m-0 p-0 max-h-[35rem] md:max-h-[32rem]   xl:max-h-[40rem] overflow-scroll ">
        <div className="border-b border-gray-300 my-2 pb-4 mx-4 md:mx-10 text-xl ">
          Edit Item
        </div>
        {/* <div className={classes["addImage--container"]}>
          <div className={classes.addImage}>+Add Image</div>
          <div className={classes.remove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=" h-4 w-4 md:h-6 md:w-6 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>Remove Image</span>
          </div>
        </div> */}

        <div className="mb-[0.2rem] mx-4 md:mx-10">
          <input
            className={classes["input"]}
            type="text"
            placeholder="Food name"
          />
          {<p className={classes["error-text"]}>Food name is required!</p>}
        </div>

        <div className="mb-[0.2rem] mx-4 md:mx-10">
          <input
            className={classes["input"]}
            type="number"
            placeholder="Food price"
          />
          {<p className={classes["error-text"]}>Food price</p>}
        </div>

        <div className="mb-[0.2rem] mx-4 lg:mx-[10rem]  xl:mx-[16rem]   cursor-pointer relative">
          <button
            className="h-full  w-full outline-none bg-gray-200 rounded-md px-4  py-2 flex items-center justify-between cursor-pointer"
            type="button"
          >
            <label className=" text-placeholder  py-1 px-1.25">
              Select food category
            </label>
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
          </button>
          <div className="absolute flex flex-col justify-center items-center  bg-gray-100 w-full   rounded-md  shadow-sm">
            <div className="py-3 text-gray-400 text-sm">
              No category selected
            </div>
            <div className=" border border-gray-200  w-full"></div>
            <button className=" py-3 text-primary cursor-pointer">
              Create category +
            </button>
          </div>
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
