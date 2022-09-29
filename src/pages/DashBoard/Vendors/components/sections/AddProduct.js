import React from "react";

import classes from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <section className={classes.container}>
      <div className={classes["text--1"]}>
        Superb! You're doing just fine. 😊
      </div>
      <div className={classes["main-text--container"]}>
        <div className={classes["main--text"]}>Start adding some products</div>
        <div className={classes["text--2"]}>Let’s help you get started</div>
      </div>
      <button className={classes.btn}>Proceed to add products</button>
    </section>
  );
};

export default AddProduct;
