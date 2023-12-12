import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MainProvider } from "../../../context/contextProvider";

const Header = () => {
  const { basket } = useContext(MainProvider);
  return (
    <header className="flex bg-red-400 justify-between items-center px-20">
      <h1>
        <Link to="/">BF103</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink
              to="/admin"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/basket"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >
              Basket
            </NavLink>
            <span>{basket?.length}</span>
          </li>
          {/* <li>
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
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
