import React, { useEffect } from "react";

const ModeSwitcher = ({ setTheme, theme }) => {
  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <button onClick={changeMode}>Change Mode</button>;
};

export default ModeSwitcher;
