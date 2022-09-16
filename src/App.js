import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import UserProfile from "./pages/profile/UserProfile";
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
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/auth/login">{!isLoggedIn && <Login />}</Route>

        <Route path="/auth/sign-in">{!isLoggedIn && <SignIn />}</Route>

        <Route path="/user-profile">
          {isLoggedIn ? <UserProfile /> : <Login />}
        </Route>

        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Login />}
        </Route>

        <Route path="/forget-password">
          {!isLoggedIn && <ChangePassword />}
        </Route>

        <Route path="/resetpassword">{!isLoggedIn && <SetNewPassword />}</Route>

        <Route path="/verify">{!isLoggedIn && <EmailVerified />}</Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
