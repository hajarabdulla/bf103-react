import React from "react";
import ModeSwitcher from "./ModeSwitcher";

const Footer = ({ setTheme, theme }) => {
  return (
    <div>
      <h1>Footer</h1>
      <ModeSwitcher setTheme={setTheme} theme={theme} />
    </div>
  );
};

export default Footer;
