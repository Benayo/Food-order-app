import React from "react";

import classes from "./StoreInfo.module.css";

const StoreInfo = () => {
  return (
    <section>
      <div>
        <div className={classes["user__logo--container"]}>
          <div className={classes["sub--container"]}>
            <div className={classes["user--logo"]}>A</div>{" "}
            <div className={classes["user--text"]}>Ada Foods</div>
          </div>
        </div>
      </div>
      <div className={classes["info__container"]}>
        <div className={classes["info__container--sub"]}>
          <div className={classes["svg--container-1"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6 text-white-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
          </div>
          <div className={classes["text--container"]}>
            <span className={classes.text}>Number of delivery</span>
            <span className={classes.number}>20</span>
          </div>
        </div>
        <div className={classes["info__container--sub"]}>
          <div className={classes["svg--container-2"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6 text-white-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className={classes["text--container"]}>
            <span className={classes.text}>Avaliable Meals</span>
            <span className={classes.number}>8</span>
          </div>
        </div>
        <div className={classes["info__container--sub"]}>
          <div className={classes["svg--container-3"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6 text-white-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <div className={classes["text--container"]}>
            <span className={classes.text}>Customer orders</span>
            <span className={classes.number}>3</span>
          </div>
        </div>
        <div className={classes["info__container--sub"]}>
          <div className={classes["svg--container-4"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6 text-white-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <div className={classes["text--container"]}>
            <span className={classes.text}>Subscription plan</span>
            <span className={classes.number}>Free</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
