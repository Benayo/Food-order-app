import React from "react";

import classes from "./Main.module.css";
import Header from "./sections/Header";
import StoreInfo from "./sections/StoreInfo";
import AddProduct from "./sections/AddProduct";
import Product from "./sections/Product";

const Main = () => {
  return (
    <main className={classes.container}>
      <Header />
      <StoreInfo />
      <AddProduct />
      <Product />
    </main>
  );
};

export default Main;
