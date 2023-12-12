import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-red-400 justify-between items-center px-20">
      <h1>BF103</h1>
      <nav>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink to="/" onClick={(isActive) => (isActive ? ".active" : "")}>
              Web
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/product"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/order"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
