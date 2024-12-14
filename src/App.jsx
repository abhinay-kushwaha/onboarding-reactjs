import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { message } from "antd";

import LandingRoutes from "./Components/Landing/Routes/LandingRoutes";
import AdminRoutes from "./Components/Admin/AdminRoutes/AdminRoutes";
import ProtectedRoute from "./Components/Protect/ProtectedRoute";
import UnauthorizedAccess from "./Components/Protect/UnauthorizedAccess";
import Loader from "./Components/Utils/Loader";

const App = () => {
  const companyId = localStorage.getItem("userId"); // Get company ID from local storage
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const roleNo = parseInt(localStorage.getItem("role"), 10);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("role");
    if (loggedIn) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", role);

    if (role === "2") {
      navigate("/admin/dashboard");
      message.success("Logged in successfully!");
    } else {
      navigate("/unauthorized");
    }
  };

 

  if (isLoggedIn === null) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <Navigate
                to={userRole === "2" ? "/admin/dashboard" : "/unauthorized"}
                replace
              />
            ) : (
              <LandingRoutes onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute
              element={AdminRoutes}
              isLoggedIn={isLoggedIn}
              userRole={userRole}
              allowedRoles={["2"]}
            />
          }
        />

        <Route path="/unauthorized" element={<UnauthorizedAccess />} />
      </Routes>
    </>
  );
};

export default App;
