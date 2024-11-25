import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../AdminLayout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";

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

      <Route path="/" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
