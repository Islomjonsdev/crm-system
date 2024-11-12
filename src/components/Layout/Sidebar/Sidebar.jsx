import "./Sidebar.css";
import React from "react";
import logo from "../../../assets/svg/headericon.svg";
import { Link, NavLink } from "react-router-dom";
import dashboardIcon from "../../../assets/icons/dashboard.svg";
import orderIcon from "../../../assets/icons/order.svg";
import productsIcon from "../../../assets/icons/products.svg";
import customersIcon from "../../../assets/icons/customer.svg";
import analIcon from "../../../assets/icons/anal.svg";
import marketIcon from "../../../assets/icons/market.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      
      <span>Menu</span>

      <ul className="sidebar_list">
        <li className="sidebar_item">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="sidebar_img" src={dashboardIcon} alt="" />
            <p className="sidebar_text">Dashboard</p>
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink
            to={"/orders"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="sidebar_img" src={orderIcon} alt="" />
            <p className="sidebar_text">Orders</p>
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink
            to={"/products"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="sidebar_img" src={productsIcon} alt="" />
            <p className="sidebar_text">Products</p>
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink
            to={"/customers"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="sidebar_img" src={customersIcon} alt="" />
            <p className="sidebar_text">Customers</p>
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink
            to={"/analitics"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="sidebar_img" src={analIcon} alt="" />
            <p className="sidebar_text">Analytics</p>
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink
            to={"/marketing"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="sidebar_img" src={marketIcon} alt="" />
            <p className="sidebar_text">Marketing</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
