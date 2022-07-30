import React from "react";

import classes from "./Copyright.module.css";
const Copyright = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>copyright2022@BenjaminOdeleye</div>
      <div className={classes["icon__container"]}>
        <div className={`${classes["icon__item"]} ${classes.facebook}`}></div>
        <div className={`${classes["icon__item"]} ${classes.whatsapp}`}></div>
        <div className={`${classes["icon__item"]} ${classes.instagram}`}></div>
        <div className={`${classes["icon__item"]} ${classes.twitter}`}></div>
      </div>
    </div>
  );
};

export default Copyright;
