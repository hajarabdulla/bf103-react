import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/admin/Header";

const AdminRoot = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminRoot;
