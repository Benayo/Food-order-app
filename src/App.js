import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <Routes>
        {!isLoggedIn && <Route path="/" exact element={<Homepage />} />}
        {!isLoggedIn && <Route path="/auth/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/auth/sign-in" element={<SignIn />} />}
        {isLoggedIn && <Route path="/user-profile" element={<UserProfile />} />}
      </Routes>
    </div>
  );
};

export default App;
