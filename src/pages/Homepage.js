import React from "react";

// import { useState } from "react";

// import Nav from "../layout/Navigation/Nav";
// import SideNav from "../layout/Navigation/SideNav";

import Hero from "../sections/Hero";
import PopularMeals from "../sections/PopularMeals";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Copyright from "../sections/Copyright";

const Homepage = (props) => {
  // const [showNavBar, setShowNavBar] = useState(false);

  // const toggleOpenNavigationHandler = () => {
  //   setShowNavBar(true);
  // };

  // const toggleCloseNavigationHandler = () => {
  //   setShowNavBar(false);
  // };

  // if (showNavBar) {
  //   return <SideNav onCancel={toggleCloseNavigationHandler} />;
  // }
  return (
    <div>
      {/* <Nav onClick={toggleOpenNavigationHandler} /> */}
      <Hero />
      <PopularMeals />
      <About />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Homepage;
