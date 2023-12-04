import React from "react";

const Header = ({ theme }) => {
  return (
    <div>
      <h1>
        Current Theme <span style={{ color: "red" }}>{theme}</span>
      </h1>
    </div>
  );
};

export default Header;
