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
import { useEffect } from "react";

const App = () => {
  // const [isVendor, setIsVendor] = useState(false);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  // const storedData = JSON.parse(localStorage.getItem("userData"));

  // console.log(isVendor, isLoggedIn);

  // const role = localStorage.getItem("role");

  // if (role === "vendor") {
  //   setIsVendor(true);
  // }
  // console.log(isVendor);
  // setIsVendor(role == "vendor" ? true : false);

  // console.log(isVendor);
  // role == "vendor" && setIsVendor(true);

  useEffect(()=>{
    
  },[])

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn && <Homepage />}
        </Route>

        <Route path="/auth/login">{ <Login />}</Route>

        <Route path="/auth/sign-up">{!isLoggedIn && <SignUp />}</Route>

        <Route path="/user-dashboard">
          {isLoggedIn ? <UserDashboard /> : <Redirect to="/auth/login" />}
        </Route>

        <Route path="/vendor-dashboard">
          {/* <VendorDashboard />  */}
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
