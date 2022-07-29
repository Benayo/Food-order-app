import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="pt-[3.75rem] md:pt-[6.75rem] px-[3.75rem]">
      <div className="flex flex-col justify-center items-center">
        <div className=" flex items-center justify-center  font-main text-3xl md:text-5xl font-bold mb-2  lg:mb-8">
          Contact us
        </div>
        <div className="text-xs font-normal lg:text-sm leading-6 lg:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>

      <div className="grid  md:grid-cols-2 my-2 gap-y-[2rem] gap-x-[6.625rem]   justify-center mt-7">
        <div className="flex flex-col justify-center items-start px-4 xl:px-[6.75rem] pt-8">
          <div className="flex mb-8">
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
            <div className="flex flex-col  justify-center">
              <div className="text-primary mb-4 text-2xl font-semibold font-contact">
                Address
              </div>
              <div className="flex justify-center items-end flex-col font-normal ">
                420/B Lorem ipsum <div className="">dolor sit amet,</div>
              </div>
            </div>
          </div>
          <div className="flex mb-8">
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
            <div className="flex flex-col  justify-center">
              <div className="text-primary mb-4 text-2xl font-semibold font-contact">
                Phone Number
              </div>
              <div className="flex justify-center items-end flex-col font-normal ">
                +234-818-343-7774
              </div>
            </div>
          </div>{" "}
          <div className="flex mb-8">
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
            <div className="flex flex-col  justify-center">
              <div className="text-primary mb-3 text-2xl font-semibold font-contact">
                Email
              </div>
              <div className="flex justify-center items-end flex-col font-normal ">
                Benjaminodeleye1@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary p-14   rounded-lg">
          <div className="flex justify-center items-center font-main text-3xl md:text-5xl font-bold mb-1 md:mb-6 xl:mb-14 text-white-100">
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
