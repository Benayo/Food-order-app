import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import UserProfile from "./pages/profile/UserProfile";
import Dashboard from "./pages/FoodDashBoard/Dashboard";

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
        {!isLoggedIn && (
          <Route path="/auth/login">
            <Login />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/auth/sign-in">
            <SignIn />
          </Route>
        )}
        <Route path="/user-profile">
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to="/auth/login" />}
        </Route>
        {isLoggedIn && (
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
