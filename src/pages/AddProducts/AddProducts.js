import React from "react";
import SideBar from "../DashBoard/Vendors/navigation/SideBar";
import Header from "../DashBoard/Vendors/components/sections/Header";
import classes from "./AddProducts.module.css";
import AddProductList from "./components/AddProductList";
import AddProductForm from "./components/AddProductForm";

const AddProducts = () => {
  return (
    <section className={classes.container}>
      <SideBar />
      <div className={classes["layout-container"]}>
        <Header
          to="/vendor-dashboard"
          title="Add products"
          title2=""
          view="Go to dashboard"
        ></Header>
        <AddProductForm />
        <AddProductList />
      </div>
    </section>
  );
};

export default AddProducts;
