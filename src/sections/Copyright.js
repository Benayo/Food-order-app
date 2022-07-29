import React from "react";

const Copyright = () => {
  return (
    <div className="grid  md:grid-cols-2 my-2 gap-y-[2rem] gap-x-[0rem]  xl:gap-x-[6.625rem]   justify-center items-center mt-7 px-4 xl:px-[6.75rem] py-[1.75rem] md:py-[3rem] bg-primary">
      <div className="text-white-100 text-base">
        copyright2022@BenjaminOdeleye
      </div>
      <div className="flex">
        <div className=" bg-facebook bg-cover h-8 w-8 mr-4 md:mx-12"></div>
        <div className=" bg-whatsapp bg-cover h-10 w-10  mx-4  md:mx-12"></div>
        <div className=" bg-instagram bg-cover h-8 w-8  mx-4 md:mx-12"></div>
        <div className=" bg-twitter bg-cover h-8 w-8  mx-4 md:mx-12"></div>
      </div>
    </div>
  );
};

export default Copyright;
