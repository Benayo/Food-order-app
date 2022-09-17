import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import ResetUserPassword from "./pages/profile/ResetUserPassword";
import Dashboard from "./pages/FoodDashBoard/Dashboard";
import ChangePassword from "./pages/auth/forgotPassword/ChangePassword";
import EmailVerified from "./pages/auth/EmailVerified";
import SetNewPassword from "./pages/auth/forgotPassword/SetNewPassword";

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

        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Redirect to="/auth/login" />}
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
