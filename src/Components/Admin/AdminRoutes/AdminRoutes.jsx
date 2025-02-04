import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../AdminLayout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Products/Products";
import Category from "../Pages/Category/Category";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <Layout>
            {" "}
            <Dashboard />{" "}
          </Layout>
        }
      />
      <Route
        path="products"
        element={
          <Layout>
            {" "}
            <Products />{" "}
          </Layout>
        }
      />
      <Route
        path="settings/category"
        element={
          <Layout>
            {" "}
            <Category />{" "}
          </Layout>
        }
      />

      <Route path="/" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
