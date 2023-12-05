import React, { useContext } from "react";
import { MainProvider } from "../context/contextProvider";

const ModeSwitcher = () => {
  const { theme, setTheme } = useContext(MainProvider);

  const changeMode = () => {
    setTheme(theme === "ligth" ? "dark" : "ligth");
  };

  return <button onClick={changeMode}>Change Mode</button>;
};

export default ModeSwitcher;
