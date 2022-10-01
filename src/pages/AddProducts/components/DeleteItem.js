import React from "react";

import Modal from "../../../components/UI/Modal";
import classes from "../AddProducts.module.css";

const DeleteItem = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <div>Are you sure you want want to delete this item</div>
      <div className={classes["action--btn"]}>
        <button onClick={props.onCancel} className={classes["btn--stroke"]}>
          Cancel
        </button>
        <button className={classes["btn--full"]}>Delete</button>
      </div>
    </Modal>
  );
};

export default DeleteItem;
