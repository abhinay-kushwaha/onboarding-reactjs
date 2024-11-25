import React, { useEffect } from "react";
import "../../../App.css";
import img1 from "../../../assets/profile.jpg";
import img2 from  "../../../assets/profile.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const FirstCompoImg = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="3000" className="flex justify-start gap-2 md:p-16 sm:p-8 p-3 absolute ">
        <div className="md:h-52  sm:h-32   h-20   -rotate-12  shadow">
          <img className="object-cover h-full w-full rounded border border-gray-200" src={img1} alt="" />
        </div>
        <div className="md:h-52  sm:h-32   h-20   rotate-12 shadow">
          <img className="object-cover h-full w-full rounded border border-gray-200" src={img2} alt="" />
        </div>
      </div>
    </>
  );
};

export default FirstCompoImg;
