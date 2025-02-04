import React from "react";
import { Link } from "react-router-dom";

import "../../../App.css";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div className=" flex flex-col  ">
      <AllProducts />
    </div>
  );
};

export default Home;
