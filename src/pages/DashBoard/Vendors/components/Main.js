import React, { useState } from "react";

import classes from "./Main.module.css";
import Header from "./sections/Header";
import StoreInfo from "./sections/StoreInfo";
import AddProduct from "./sections/AddProduct";
import Product from "./sections/Product";
import SideNav from "../navigation/SideNav";
import DeleteItem from "../../../AddProducts/components/DeleteItem";
import EditProductItem from "../../../AddProducts/components/EditProductItem";

const Main = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [deleteItemModal, setDeleteItemModal] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const toggleOpenNavigationHandler = () => {
    setToggleSideNav(true);
  };

  const toggleCloseNavigationHandler = () => {
    setToggleSideNav(false);
  };

  const toggleOpenDeleteItemHandler = () => {
    setDeleteItemModal(true);
  };

  const toggleCloseDeleteItemHandler = () => {
    setDeleteItemModal(false);
  };

  const toggleOpenEditItemHandler = () => {
    setEditItem(true);
  };

  const toggleCloseEditItemHandler = () => {
    setEditItem(false);
  };

  if (toggleSideNav) {
    return <SideNav onCancel={toggleCloseNavigationHandler} />;
  }
  return (
    <main className={classes.container}>
      {editItem && <EditProductItem onCancel={toggleCloseEditItemHandler} />}
      {deleteItemModal && (
        <DeleteItem onCancel={toggleCloseDeleteItemHandler} />
      )}
      <Header
        title="Dashboard"
        title2="Here to serve you!"
        view="View your restuarant"
        onClick={toggleOpenNavigationHandler}
      ></Header>
      <StoreInfo />
      <AddProduct />
      <Product
        onEdit={toggleOpenEditItemHandler}
        onDelete={toggleOpenDeleteItemHandler}
      />
    </main>
  );
};

export default Main;
