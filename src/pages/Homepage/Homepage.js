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

  // let markMass = 78;
  // let markHeight = 1.69;

  // let johnMass = 92;
  // let johnHeight = 1.95;

  // //TEST DATA 1
  // const markBMI1 = `${markMass / markHeight ** 2} kg/m`;
  // const johnBMI1 = `${johnMass / johnHeight ** 2} kg/m`;

  // const markHigherBMI1 = markBMI1 > johnBMI1;

  // if (markBMI1 > johnBMI1) {
  //   console.log(`Mark's BMI is higher than John's`);
  // } else {
  //   console.log(`Johns BMI is higher than John's`);
  // }

  // console.log(markBMI1, johnBMI1, markHigherBMI1);
  // //TEST DATA 2
  // markMass = 95;
  // markHeight = 1.88;

  // johnMass = 85;
  // johnHeight = 1.76;

  // const markBMI2 = `${markMass / markHeight ** 2} kg/m`;
  // const johnBMI2 = `${johnMass / johnHeight ** 2} kg/m`;

  // const markHigherBMI2 = markBMI2 > johnBMI2;
  // console.log(markBMI2, johnBMI2, markHigherBMI2);

  // if (markBMI2 > johnBMI2) {
  //   console.log(`Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}`);
  // } else {
  //   console.log(`Johns BMI ${johnBMI2} is higher than Mark's BMI ${markBMI2}`);
  // }

  //TEST DATA 1
  // let teamDolphins = [96, 108, 89];
  // let teamKoalas = [96, 110, 89];

  // const avgDolphins =
  //   (teamDolphins[0] + teamDolphins[1] + teamDolphins[2]) / teamDolphins.length;

  // const avgKoalas =
  //   (teamKoalas[0] + teamKoalas[1] + teamKoalas[2]) / teamKoalas.length;

  // let score = 95;

  // if (avgDolphins >= score && avgDolphins > avgKoalas) {
  //   console.log(`Team Dolphins wins`);
  // } else if (avgKoalas >= score && avgKoalas > avgDolphins) {
  //   console.log(`Team Koalas wins`);
  // } else if (avgDolphins < score && avgKoalas < score) {
  //   console.log(`No one wins`);
  // } else if (
  //   avgDolphins >= score &&
  //   avgKoalas >= score &&
  //   avgDolphins === avgKoalas
  // ) {
  //   console.log(`There was a draw`);
  // }

  // console.log(avgDolphins, avgKoalas);

  // let bill;

  // bill = 275;

  // bill = 40;

  // bill = 430;

  // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  // console.log(tip);

  // console.log(
  //   `The bill was ${bill}, the tip was ${tip}, and the total value ${
  //     bill + tip
  //   }`
  // );

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
