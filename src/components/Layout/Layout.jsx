import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout_wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
