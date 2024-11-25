import React from "react";
import { Link } from "react-router-dom";

import "../../../App.css";
import FirstCompo from "./FirstCompo";

const Home = () => {
  return (
    <div className=" flex flex-col  ">
      <FirstCompo />
    </div>
  );
};

export default Home;
