import React from "react";

import SideBar from "./navigation/SideBar";
import Main from "./components/Main";
import classes from "./VendorDashboard.module.css";

const VendorDashboard = () => {
  return (
    <section className={classes.container}>
      <SideBar />
      <Main />
    </section>
  );
};

export default VendorDashboard;
