import React, { useContext } from "react";
import { MainProvider } from "../context/contextProvider";

const Header = () => {
  const { theme } = useContext(MainProvider);

  return (
    <div>
      <h1>
        Current theme = <span style={{ color: "red" }}>{theme}</span>
      </h1>
      Header
    </div>
  );
};

export default Header;
