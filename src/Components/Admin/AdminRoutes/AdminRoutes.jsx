import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../AdminLayout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DarkTheme from "../../Common/Inner/DarkTheme";
import Wow from "../Pages/Wow-paga/Wow";
import Profile from "../../Common/Inner/Profile";
import ProjectStatus from "../Pages/Project-Status/ProjectStatus";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route  path="dashboard"  element={ <Layout>  <Dashboard />  </Layout>  }  />
      <Route  path="projects-status"  element={ <Layout>  <ProjectStatus />  </Layout>  }  />
      <Route  path="settings/wow"  element={ <Layout>  <Wow />  </Layout>  }  />
      <Route  path="settings/dark-theme"  element={ <Layout>  <DarkTheme />  </Layout>  }  />
      <Route  path="settings/profile"  element={ <Layout>  <Profile />  </Layout>  }  />
 

      <Route path="/" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
