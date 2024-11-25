import React from "react";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";

const LandingLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen overflow-y-scroll scrollbar-hidden">
      <div>
        <div className="sticky top-0 z-50 bg-gray-50">
          <Header />
        </div>
        <main className="">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
