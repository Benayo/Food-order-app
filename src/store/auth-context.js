import React, { useState, useEffect } from "react";
import { useCallback } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  role: null,
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const loginHandler = useCallback((token) => {
    setToken(token);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem("userData");

    localStorage.removeItem("access");

    localStorage.removeItem("role");
  }, []);

  const storedRole = localStorage.getItem("role");

  useEffect(() => {
    const storedAccess = localStorage.getItem("access");

    if (storedAccess) {
      setToken(storedAccess);
    }
  }, []);

  const contextValue = {
    token: token,
    isLoggedIn: !!token,
    login: loginHandler,
    logout: logoutHandler,
    role: storedRole,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
