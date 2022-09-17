import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import ResetUserPassword from "./pages/profile/ResetUserPassword";
import Dashboard from "./pages/FoodDashBoard/Dashboard";
import ChangePassword from "./pages/auth/forgotPassword/ChangePassword";
import EmailVerified from "./pages/auth/EmailVerified";
import SetNewPassword from "./pages/auth/forgotPassword/SetNewPassword";
import VerifyEmail from "./pages/profile/VerifyEmail";

import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  console.log(isLoggedIn);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn ? <Homepage /> : <Dashboard />}
        </Route>

        <Route path="/auth/login">{!isLoggedIn && <Login />}</Route>

        <Route path="/auth/sign-in">{!isLoggedIn && <SignIn />}</Route>

        {/* <Route path="/reset-user-password">
          {isLoggedIn ? <ResetUserPassword /> : <Login />}
        </Route> */}

        <Route path="/verify-email">
          {isLoggedIn ? <VerifyEmail /> : <Login />}
        </Route>

        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Redirect to="/auth/login" />}
          {/* <Dashboard /> */}
        </Route>

        <Route path="/forget-password">
          {!isLoggedIn && <ChangePassword />}
        </Route>

        <Route path="/resetpassword">
          {isLoggedIn ? <ResetUserPassword /> : <SetNewPassword />}
        </Route>

        {/* <Route path="/resetpassword">
          {isLoggedIn && <ResetUserPassword />}
        </Route> */}

        <Route path="/verify">{!isLoggedIn && <EmailVerified />}</Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
