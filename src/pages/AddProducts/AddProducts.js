import React, { useState } from "react";
import SideBar from "../DashBoard/Vendors/navigation/SideBar";
import Header from "../DashBoard/Vendors/components/sections/Header";
import classes from "./AddProducts.module.css";
import AddProductList from "./components/AddProductList";
import AddProductForm from "./components/AddProductForm";
import EditProductItem from "./components/EditProductItem";
import DeleteItem from "./components/DeleteItem";

const AddProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [openDeleteItem, setOpenDeleteItem] = useState(false);

  const toggleOpenModalHandler = () => {
    setShowModal(true);
  };

  const toggleCloseModalHandler = () => {
    setShowModal(false);
  };

  const toggleOpenDeleteItemHandler = () => {
    setOpenDeleteItem(true);
  };

  const toggleCloseDeleteItemHandler = () => {
    setOpenDeleteItem(false);
  };

  return (
    <section className={classes.container}>
      <SideBar />
      {openDeleteItem && <DeleteItem onCancel={toggleCloseDeleteItemHandler} />}
      {showModal && <EditProductItem onCancel={toggleCloseModalHandler} />}
      <div className={classes["layout-container"]}>
        <Header
          to="/vendor-dashboard"
          title="Add products"
          title2=""
          view="Go to dashboard"
        ></Header>
        <AddProductForm stroke="+Add Item" full="Upload item" />
        <AddProductList
          onDelete={toggleOpenDeleteItemHandler}
          onEdit={toggleOpenModalHandler}
        />
      </div>
    </section>
  );
};

export default AddProducts;
