import React, { Fragment } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Analitics from "../Analitics/Analitics";
import Login from "../auth/Login/Login";
import Customers from "../Customers/Customers";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import Marketing from "../Marketing/Marketing";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analitics" element={<Analitics />} />
          <Route path="/marketing" element={<Marketing />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
