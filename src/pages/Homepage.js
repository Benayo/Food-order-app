import React from "react";

import { useState } from "react";

import Nav from "../layout/Navigation/Nav";
import SideNav from "../layout/Navigation/SideNav";

import Hero from "../sections/Hero";
import PopularMeals from "../sections/PopularMeals";
import About from "../sections/About";

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
    </div>
  );
};

export default Homepage;
