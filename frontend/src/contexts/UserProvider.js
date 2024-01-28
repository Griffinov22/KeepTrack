import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return <UserContext.Provider value={{ loggedIn, setLoggedIn }}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
