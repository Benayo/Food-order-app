import React, { useState } from "react";

import Header from "../../components/Dashboard-layout/Header";
import Meals from "../../components/Meals/Meals";
import Cart from "../../components/Cart/Cart";
import CartProvider from "../../store/CartProvider";

const Dashboard = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const accessToken = JSON.parse(localStorage.getItem("access"));

  console.log(accessToken);

  return (
    <CartProvider>
      <div className="bg-[#383838] min-h-full pb-[2rem]">
        {cartIsShown && <Cart onCancel={hideCartHandler} />}
        <Header onClick={showCartHandler} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
};

export default Dashboard;
