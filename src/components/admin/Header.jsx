import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../client/Header/style";

const Header = () => {
  return (
    <Navbar>
      <h1>Logo</h1>
      <ul>
        <NavLink
          to="/admin"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/admin/products"
        >
          Products
        </NavLink>
      </ul>
    </Navbar>
  );
};
export default Header;
