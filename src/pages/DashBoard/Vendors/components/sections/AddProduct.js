import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/products/create" className={classes.btn}>
        Proceed to add products
      </Link>
    </section>
  );
};

export default AddProduct;
