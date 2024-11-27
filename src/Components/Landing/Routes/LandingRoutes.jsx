import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../LandingPage/SignUp";
import LogIn from "../LandingPage/LogIn";
import LandingLayout from "../Layout/LandingLayout";
import NewPassword from "../LandingPage/NewPassword";
import ForgotPass from "../LandingPage/ForgotPass";
import ThankuSign from "../LandingPage/ThankuSign";
import OTPVerify from "../LandingPage/OTPVerify";
import Intro from "../LandingPage/Landing/Intro";

const LandingRoutes = ({ onLogin }) => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <LandingLayout>
              <Intro />
            </LandingLayout>
          }
        />
        <Route
          path="/"
          element={
            <LandingLayout>
              <Intro />
            </LandingLayout>
          }
        />
        <Route
          path="/signUp"
          element={
            <LandingLayout>
              <SignUp />
            </LandingLayout>
          }
        />
        <Route
          path="/otpVerify"
          element={
            <LandingLayout>
              <OTPVerify />
            </LandingLayout>
          }
        />
        <Route
          path="/forgotPass"
          element={
            <LandingLayout>
              <ForgotPass />
            </LandingLayout>
          }
        />
        <Route
          path="/newPassword/:token"
          element={
            <LandingLayout>
              <NewPassword />
            </LandingLayout>
          }
        />
        <Route
          path="/thankuForSign"
          element={
            <LandingLayout>
              <ThankuSign />
            </LandingLayout>
          }
        />
        <Route
          path="/logIn"
          element={
            <LandingLayout>
              <LogIn onLogin={onLogin} />
            </LandingLayout>
          }
        />
      </Routes>
    </>
  );
};

export default LandingRoutes;
