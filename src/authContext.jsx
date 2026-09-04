import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Read the persisted session before the first route is rendered. This avoids
  // briefly treating an already signed-in user as unauthenticated.
  const [currentUser, setCurrentUser] = useState(() =>
    localStorage.getItem("userId"),
  );

  const value = { currentUser, setCurrentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
