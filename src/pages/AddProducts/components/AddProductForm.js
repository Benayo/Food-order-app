import React from "react";

import classes from "../AddProducts.module.css";

const AddProductForm = () => {
  return (
    <form>
      <div className={classes["addImage--container"]}>
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
          </svg>{" "}
          <span>Remove Image</span>
        </div>
      </div>

      <div className={classes["input__control"]}>
        <input
          className={classes["input"]}
          type="text"
          placeholder="Food name"
        />
        {<p className={classes["error-text"]}>Food name is required!</p>}
      </div>

      <div className={classes["input__control"]}>
        <input
          className={classes["input"]}
          type="number"
          placeholder="Food price"
        />
        {<p className={classes["error-text"]}>Food price</p>}
      </div>

      <div className={classes["input__control"]}>
        <input
          className={classes["input"]}
          type="text"
          placeholder="Item category"
        />
      </div>

      <div className={classes["input__control"]}>
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
          <button className={classes["btn--stroke"]}>Add new item</button>
          <button className={classes["btn--full"]}>Upload item</button>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
