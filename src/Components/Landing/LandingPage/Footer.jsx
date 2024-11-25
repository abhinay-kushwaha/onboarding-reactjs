import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="text-center md:flex justify-around bg-[#544541] text-[#FFFFFF] lg:p-7 p-3">
      <h1 className="text-wrap">
        Developed with love by <strong>Abhinay</strong> © {currentYear}
      </h1>
      <div className="flex gap-5 justify-center">
        <h1>Terms & Conditions</h1>
        <h1>Privacy Policy</h1>
      </div>
    </div>
  );
};

export default Footer;
