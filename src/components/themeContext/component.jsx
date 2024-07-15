import React, { useContext } from "react";
import { useState, useCallback } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  const toggleButton = useCallback(
    () => setTheme((prevState) => (prevState === "white" ? "yellow" : "white")),
    []
  );

  return (
    <ThemeContext.Provider value={{ value: theme, toggleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};
