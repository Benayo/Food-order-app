import React from "react";

import LoginNav from "../layout/Navigation/LoginNav";

const Login = () => {
  return (
    <div>
      <LoginNav />

      <div className="h-screen px-[32%] flex flex-col justify-center ">
        <div className="font-main text-3xl md:text-5xl font-bold mb-1 md:mb-6">
          Welcome Back
        </div>
        <div className="text-xs font-normal lg:text-sm leading-6 lg:leading-8 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus neque minima dolor.
        </div>
        <form action="submit" className="mt-4">
          <input
            type="email"
            name="text"
            required
            placeholder="Email Address"
            className="w-full bg-gray-100"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full bg-gray-100"
          />
        </form>
        <div className="text-primary underline text-xs font-normal lg:text-sm leading-6 font-body mb-8">
          Forget Password?
        </div>
        <div className="text-gray-400 text-xs font-normal leading-6 font-body ">
          By continuing, I represent that I have read, understand, and fully
          agree to the FOODBLOG{" "}
          <span className="text-primary">terms of service</span> and{" "}
          <span className="text-primary">privacy policy</span> .
        </div>
        <button className="mt-4 bg-primary py-3 text-white-100 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;
