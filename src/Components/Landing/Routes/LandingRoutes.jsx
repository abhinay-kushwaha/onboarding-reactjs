import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../LandingPage/SignUp";
import LogIn from "../LandingPage/LogIn";
import Home from "../LandingPage/Home";
import LandingLayout from "../Layout/LandingLayout";
import NewPassword from "../LandingPage/NewPassword";
import ForgotPass from "../LandingPage/ForgotPass";
import ThankuSign from "../LandingPage/ThankuSign";
import OTPVerify from "../LandingPage/OTPVerify";
import Banner from "../LandingPage/Banner";
import Product from "../LandingPage/Product";
import AboutUS from "../LandingPage/AboutUS";
import Privacy from "../LandingPage/Privacy";
import Terms from "../LandingPage/Terms";

const LandingRoutes = ({ onLogin }) => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <LandingLayout>
              <Banner />
            </LandingLayout>
          }
        />
        <Route
          path="/"
          element={
            <LandingLayout>
              <Banner />
            </LandingLayout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <LandingLayout>
              <Terms />
            </LandingLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <LandingLayout>
              <Privacy />
            </LandingLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <LandingLayout>
              <AboutUS />
            </LandingLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <LandingLayout>
              <Home />
            </LandingLayout>
          }
        />
        <Route
          path="/shop/product"
          element={
            <LandingLayout>
              <Product />
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
