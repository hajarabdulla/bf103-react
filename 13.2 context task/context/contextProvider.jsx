import { createContext, useEffect, useState } from "react";

export const MainProvider = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("ligth");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const values = {
    theme,
    setTheme,
    users,
    setUsers,
  };

  return (
    <MainProvider.Provider value={values}>{children}</MainProvider.Provider>
  );
};

export default ContextProvider;
