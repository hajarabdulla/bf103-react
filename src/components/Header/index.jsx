import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./style.js";

const Header = () => {
  return (
    <Navbar>
      <h1>Logo</h1>
      <ul>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
      </ul>
    </Navbar>
  );
};

export default Header;
