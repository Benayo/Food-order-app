import { Switch, Route, Redirect } from "react-router-dom";
import { useContext, useState } from "react";

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
  // const [isUser, setIsUser] = useState(false);
  // const [isVendor, setIsVendor] = useState(false);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const role = authCtx.role;

  if (role === '"user"') {
    console.log("I am a user");
  } else if (role === '"vendor"') {
    console.log("I am a vendor");
  } else {
    console.log("I am an imposter");
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn ? (
            <Homepage />
          ) : role === '"user"' ? (
            <Redirect to="/user-dashboard" />
          ) : (
            <Redirect to="/vendor-dashboard" />
          )}
        </Route>

        <Route path="/auth/login">
          {!isLoggedIn ? (
            <Login />
          ) : role === '"user"' ? (
            <Redirect to="/user-dashboard" />
          ) : (
            <Redirect to="/vendor-dashboard" />
          )}
        </Route>

        <Route path="/auth/sign-up">
          {!isLoggedIn ? (
            <SignUp />
          ) : role === '"user"' ? (
            <Redirect to="/user-dashboard" />
          ) : (
            <Redirect to="/vendor-dashboard" />
          )}
        </Route>

        <Route path="/user-dashboard">
          {isLoggedIn && role === '"user"' ? (
            <UserDashboard />
          ) : role === '"vendor"' ? (
            <Redirect to="/vendor-dashboard" />
          ) : (
            !isLoggedIn && <Redirect to="/auth/login" />
          )}
        </Route>

        <Route exact path="/vendor-dashboard">
          {isLoggedIn && role === '"vendor"' ? (
            <VendorDashboard />
          ) : role === '"user"' ? (
            <Redirect to="/user-dashboard" />
          ) : (
            !isLoggedIn && <Redirect to="/auth/login" />
          )}
        </Route>

        <Route exact path="/products/create">
          {isLoggedIn && role === '"vendor"' ? (
            <AddProducts />
          ) : role === '"user"' ? (
            <Redirect to="/user-dashboard" />
          ) : (
            !isLoggedIn && <Redirect to="/auth/login" />
          )}
        </Route>

        <Route path="/forget-password">
          {!isLoggedIn ? <ChangePassword /> : <Redirect to="/auth/login" />}
        </Route>

        {/* <Route path="/resetpassword">
          {isLoggedIn ? <ResetUserPassword /> : <SetNewPassword />}
        </Route> */}

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
