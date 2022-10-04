import React, { useState } from "react";
import SideBar from "../DashBoard/Vendors/navigation/SideBar";
import Header from "../DashBoard/Vendors/components/sections/Header";
import classes from "./AddProducts.module.css";
import AddProductList from "./components/AddProductList";
import AddProductForm from "./components/AddProductForm";
import EditProductItem from "./components/EditProductItem";
import DeleteItem from "./components/DeleteItem";
import Category from "./components/Category";

const AddProducts = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [openDeleteItem, setOpenDeleteItem] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const toggleOpenModalHandler = () => {
    setShowEditModal(true);
  };

  const toggleCloseModalHandler = () => {
    setShowEditModal(false);
  };

  const toggleOpenDeleteItemHandler = () => {
    setOpenDeleteItem(true);
  };

  const toggleCloseDeleteItemHandler = () => {
    setOpenDeleteItem(false);
  };

  const toggleOpenCategoryHandler = () => {
    setShowCategoryModal(true);
  };

  const toggleCloseCategoryHandler = () => {
    setShowCategoryModal(false);
  };

  return (
    <section className={classes.container}>
      <SideBar />
      {openDeleteItem && <DeleteItem onCancel={toggleCloseDeleteItemHandler} />}
      {showEditModal && <EditProductItem onCancel={toggleCloseModalHandler} />}
      {showCategoryModal && <Category onCancel={toggleCloseCategoryHandler} />}
      <div className={classes["layout-container"]}>
        <Header
          to="/vendor-dashboard"
          title="Add products"
          title2=""
          view="Go to dashboard"
        ></Header>
        <AddProductForm
          onCategory={toggleOpenCategoryHandler}
          stroke="+Add Item"
          full="Upload item"
        />
        <AddProductList
          onDelete={toggleOpenDeleteItemHandler}
          onEdit={toggleOpenModalHandler}
        />
      </div>
    </section>
  );
};

export default AddProducts;
