import React, { useContext } from "react";

import { useState } from "react";

import Nav from "../layout/Navigation/Nav";
import DashboardNav from "../layout/DashBoardNav/DashboardNav";
import SideNav from "../layout/Navigation/SideNav";

import Hero from "../sections/Hero";
import PopularMeals from "../sections/PopularMeals";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Copyright from "../sections/Copyright";
import AuthContext from "../store/auth-context";

const Homepage = (props) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

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
      {!isLoggedIn && <Nav onClick={toggleOpenNavigationHandler} />}
      {isLoggedIn && <DashboardNav />}
      <Hero />
      <PopularMeals />
      <About />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Homepage;
