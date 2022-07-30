import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes["text__container"]}>
        <div className={classes["text__main"]}>Contact us</div>
        <div className={classes["text__sub"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>

      <div className={classes["grid__container"]}>
        <div className={classes["contact__container"]}>
          <div className={classes["contact__items"]}>
            <div className="mr-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-8 md:w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={classes["contact__flex__box"]}>
              <div className={classes["contact__main__text"]}>Address</div>
              <div className={classes["contact__sub__text"]}>
                420/B Lorem ipsum <div>dolor sit amet,</div>
              </div>
            </div>
          </div>
          <div className={classes["contact__items"]}>
            <div className="mr-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-8 md:w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className={classes["contact__flex__box"]}>
              <div className={classes["contact__main__text"]}>Phone Number</div>
              <div className={classes["contact__sub__text"]}>
                +234-818-343-7774
              </div>
            </div>
          </div>{" "}
          <div className={classes["contact__items"]}>
            <div className="mr-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:w-8 md:h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className={classes["contact__flex__box"]}>
              <div className={classes["contact__main__text"]}>Email</div>
              <div>Benjaminodeleye1@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={classes['message__container']}>
          <div className={classes['message__text__main']}>
            Send Message
          </div>
          <form
            target="_blank"
            action="https://formspree.io/f/mdobrgwe"
            method="POST"
          >
            <input type="text" name="text" required placeholder="Full Name" />

            <input
              type="email"
              name="text"
              required
              placeholder="Email Address"
            />

            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
