import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/SignUp/SignUp";
import ResetUserPassword from "./pages/profile/ResetUserPassword";
import ChangePassword from "./pages/auth/forgotPassword/ChangePassword";
import EmailVerified from "./pages/auth/SignUp/components/EmailVerified";
import SetNewPassword from "./pages/auth/forgotPassword/SetNewPassword";
import AuthContext from "./store/auth-context";
import UserDashboard from "./pages/DashBoard/Users/UserDashboard";
import VendorDashboard from "./pages/DashBoard/Vendors/VendorDashboard";
import AddProducts from "./pages/AddProducts/AddProducts";

const App = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const role = localStorage.getItem("role");

  console.log(role);

  // const storedData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn ? <Homepage /> : <Redirect to="/user-dashboard" />}
        </Route>

        <Route path="/auth/login">
          {!isLoggedIn ? <Login /> : <Redirect to="/dashboard" />}
        </Route>

        <Route path="/auth/sign-up">
          {!isLoggedIn ? <SignUp /> : <Redirect to="/dashboard" />}
        </Route>

        <Route path="/user-dashboard">
          {isLoggedIn ? <UserDashboard /> : <Redirect to="/auth/login" />}
        </Route>

        <Route path="/vendor-dashboard">
          {isLoggedIn ? <VendorDashboard /> : <Redirect to="/auth/login" />}
        </Route>

        <Route path="/products/create">
          {isLoggedIn ? <AddProducts /> : <Redirect to="/auth/login" />}
        </Route>

        <Route path="/forget-password">
          {!isLoggedIn ? <ChangePassword /> : <Redirect to="/auth/login" />}
        </Route>

        <Route path="/resetpassword">
          {isLoggedIn ? <ResetUserPassword /> : <SetNewPassword />}
        </Route>

        <Route path="/verify">
          {!isLoggedIn ? <EmailVerified /> : <Redirect to="/auth/login" />}
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
