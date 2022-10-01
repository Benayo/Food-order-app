import React from "react";

import classes from "../AddProducts.module.css";

const AddProductForm = (props) => {
  return (
    <form>
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
        <select className="bg-gray-200 text-sm md:text-base w-full p-4  rounded-md cursor-pointer">
          <option className="text-gray-700" selected>
            Choose category
          </option>
          <option value="US">Dinner</option>
          <option value="CA">Breakfast</option>
          <option value="FR">Lunch</option>
          <option value="DE">Brunch</option>
        </select>
      </div>
      <div className={classes["input__control"]}>
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
          <button onClick={props.onCancel} className={classes["btn--stroke"]}>
            {props.stroke}
          </button>
          <button className={classes["btn--full"]}>{props.full}</button>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
