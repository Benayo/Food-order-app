import React, { useState } from "react";

import Nav from "./navigation/Nav";
import SideNav from "./navigation/SideNav";

import About from "./sections/About";
import Hero from "./sections/Hero";
import PopularMeals from "./sections/PopularMeals";
import Footer from "./sections/Footer";
import Copyright from "./sections/Copyright";

const Homepage = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleOpenNavigationHandler = () => {
    setShowNavBar(true);
  };

  const toggleCloseNavigationHandler = () => {
    setShowNavBar(false);
  };

  if (showNavBar) {
    return <SideNav onCancel={toggleCloseNavigationHandler} />;
  }

  return (
    <div>
      <Nav onClick={toggleOpenNavigationHandler} />
      <Hero />
      <PopularMeals />
      <About />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Homepage;
