import React, { useState } from "react";

import classes from "./Main.module.css";
import Header from "./sections/Header";
import StoreInfo from "./sections/StoreInfo";
import AddProduct from "./sections/AddProduct";
import Product from "./sections/Product";
import SideNav from "../navigation/SideNav";

const Main = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);

  const toggleOpenNavigationHandler = () => {
    setToggleSideNav(true);
  };

  const toggleCloseNavigationHandler = () => {
    setToggleSideNav(false);
  };

  if (toggleSideNav) {
    return <SideNav onCancel={toggleCloseNavigationHandler} />;
  }
  return (
    <main className={classes.container}>
      <Header
        title="Dashboard"
        title2="Here to serve you!"
        view="View your restuarant"
        onClick={toggleOpenNavigationHandler}
      ></Header>
      <StoreInfo />
      <AddProduct />
      <Product />
    </main>
  );
};

export default Main;
