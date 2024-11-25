 

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
 
import { message } from 'antd';
 
 
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
  const navigate = useNavigate(); // Add useNavigate hook

// role ko read karega 
  const roleNo = parseInt(localStorage.getItem('role'), 10);


 

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
   
    // fetchLeads();
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", role);
    // window.location.reload();
   

    // Navigate based on user role without reloading the page
    if (role === "2") {
      navigate("/admin/dashboard");
      message.success("Logged in successfully!");
    } else if (role === "1") {
      // window.location.reload();
      navigate("/corporate/dashboard");
      message.success("Logged in successfully!");
    } else if (role === "3") {
      // window.location.reload();
      navigate("/employee/empdashboard");
      message.success("Logged in successfully!");
    }else if (role === "4") {
      // window.location.reload();
      navigate("/manager/mandashboard");
      message.success("Logged in successfully!");
    }else if (role === "5") {
      navigate("/hr/hrdashboard");
      message.success("Logged in successfully!");
    }else {
      navigate("/unauthorized");
    }
  };





  const closeNotification = () => {
    setNotification(null);
  };

  if (isLoggedIn === null) {
    return <Loader />;
  }

  return (
    <>
 
      <Routes>
        {/* <Route path="/registerEmployee/:token/emailId/:email" element={<CompleteEmployeeRegistration />} /> */}
        {/* <Route path="/paymentsuccess" element={ <SuccessPlan />} /> */}
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <Navigate
                to={
                  userRole === "2"
                    ? "/admin/dashboard"
                    : userRole === "1"
                    ? "/corporate/dashboard"
                    : userRole === "3"
                    ? "/employee/empdashboard"
                    : userRole === "4"
                    ? "/manager/mandashboard"
                    : userRole === "5"
                    ? "/hr/hrdashboard"
                    : "/unauthorized"
                }
                replace
              />
            ) : (
              <LandingRoutes onLogin={handleLogin} />
            )
          }
        />
        <Route path="/admin/*" element={<ProtectedRoute element={AdminRoutes} isLoggedIn={isLoggedIn} userRole={userRole} allowedRoles={["2"]} />} />
        {/* <Route path="/corporate/*" element={<ProtectedRoute element={CorporateRoutes} isLoggedIn={isLoggedIn} userRole={userRole} allowedRoles={["2"]} />} />
        <Route path="/employee/*" element={<ProtectedRoute element={EmpRoutes} isLoggedIn={isLoggedIn} userRole={userRole} allowedRoles={["3"]} />} />
        <Route path="/manager/*" element={<ProtectedRoute element={ManagerRoutes} isLoggedIn={isLoggedIn} userRole={userRole} allowedRoles={["4"]} />} />
        <Route path="/hr/*" element={<ProtectedRoute element={HRRoutes} isLoggedIn={isLoggedIn} userRole={userRole} allowedRoles={["5"]} />} /> */}
        <Route path="/unauthorized" element={<UnauthorizedAccess />} />
      </Routes>

      {/* {notification && <Notification message={notification.message} onClose={closeNotification} />} */}
    </>
  );
};

export default App;







 