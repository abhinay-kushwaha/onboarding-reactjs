import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 p-2">
        <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] relative">
          <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted playsInline>
            <source src="https://assets.therowdy.club/webBannerVideo_opt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
       <div className="text-xs sm:text-base py-2">
       <p className="flex justify-end items-center">
          <button className="bg-black text-gray-200 font-bold p-3 px-5 sm:px-10 rounded-md xl:relative -top-5 -right-4">
            <Link to="/shop"> SHOP NOW</Link>
          </button>
        </p>
        <p className="flex ">
          <button className="bg-black text-gray-200 font-bold p-3 px-5 sm:px-10 rounded-md  ">
            <Link to="/shop"> Winter Essentials 24 ᴺᴱᵂ</Link>
          </button>
        </p>
        <h1 className="text-black font-extrabold text-2xl sm:text-4xl text-end ">
Reclaim Indian Supremacy
</h1>
       </div>
      </div>
    </>
  );
};

export default Banner;
