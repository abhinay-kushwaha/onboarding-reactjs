import React from "react";
import { Link } from "react-router-dom";
 

import "../../../App.css";
import FirstCompo from "./FirstCompo";
import MorqueeCompo from "./MorqueeCompo";
 

const Home = () => {
  return (
    <div className=" flex flex-col  ">
      <FirstCompo />
      <MorqueeCompo />

      
     
    </div>
  );
};

export default Home;
