import React from "react";
import Modal from "../../../components/UI/Modal";
import classes from "../AddProducts.module.css";

const ProductAdded = () => {
  return (
    <Modal>
      <div className="flex justify-center  items-center mb-12">
        Congratulations 🥳! Your product has been uploaded succesfully.
      </div>
      <div className={classes["action--btn"]}>
        <button className={classes["btn--stroke"]}>Add new item</button>
        <button className={classes["btn--full"]}>Go to dashboard</button>
      </div>
    </Modal>
  );
};

export default ProductAdded;
