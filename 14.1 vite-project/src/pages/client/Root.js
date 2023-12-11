import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/client/Header";
import Footer from "../../components/client/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
