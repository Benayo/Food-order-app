import React from "react";

import LoginNav from "../layout/Navigation/LoginNav";

const Login = () => {
  return (
    <div>
      <LoginNav />

      <div className="h-screen flex flex-col justify-center items-center">
        <div>Welcome Back</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus neque minima dolor, consequatur ipsam repellendus atque
          porro deleniti ut assumenda doloribus at, nesciunt ratione provident
          unde doloremque. Quis, totam repellat.
        </div>
        <form action="submit">
          <input
            type="email"
            name="text"
            required
            placeholder="Email Address"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
