import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Nav from "./layout/Navigation/Nav";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
