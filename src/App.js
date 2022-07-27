import { useState } from "react";
import Nav from "./layout/Navigation/Nav";
import SideNav from "./layout/Navigation/SideNav";

const App = () => {
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
    </div>
  );
};

export default App;
