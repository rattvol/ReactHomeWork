import React, { useContext } from "react";
import { useState, useCallback } from "react";

const UserContext = React.createContext();

const defaultUserName = "DefaultUser";

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);

  const toggleButton = useCallback(
    () => setUserName((prevState) => (prevState ? null : defaultUserName)),
    []
  );

  return (
    <UserContext.Provider value={{ value: userName, toggleButton }}>
      {children}
    </UserContext.Provider>
  );
};
