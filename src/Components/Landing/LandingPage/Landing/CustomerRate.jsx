import React from 'react';
import girl from "../../../../assets/introOne.jpg";
import girl1 from "../../../../assets/landingBan.jpg"

const CustomerRate = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-12">
        {/* Text Section */}
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Simple Management, Revolutionizing Customer Relations
          </h1>
          <p className="text-base sm:text-lg mb-8">
            CustKlen empowers growth through revolutionary customer relations with simple management!
          </p>
        </div>

        {/* Card Section */}
        <div className="relative md:w-1/2 bg-white text-black rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-6">
            <img src={girl} alt="User 1" className="w-10 h-10 object-cover rounded-full mr-2" />
            <img src={girl} alt="User 2" className="w-10 h-10 object-cover rounded-full mr-2" />
            <img src={girl} alt="User 3" className="w-10 h-10 object-cover rounded-full mr-2" />
            <span className="text-2xl font-bold">+</span>
          </div>
          <p className="text-sm sm:text-base mb-6">
            We're revolutionizing customer relations with our empowering CRM platform, driving growth for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <i className="fas fa-users text-blue-600 text-2xl mr-2"></i>
                <span className="text-lg sm:text-xl font-bold">14,720+</span>
              </div>
              <p className="text-sm">Customer Repeat</p>
              <p className="text-xs text-gray-500">Our community of Shepherds</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <img src={girl} alt="User 4" className="w-10 h-10 object-cover rounded-full mr-2" />
                <img src={girl} alt="User 5" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <p className="text-sm font-bold">Client Satisfaction</p>
              <p className="text-lg font-bold">
                14,9/15k <span className="text-green-500 text-sm">25% <i className="fas fa-arrow-up"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4">
        <img src={girl1} alt="Logo 1" className="h-10 mx-auto" />
        <img src={girl1} alt="Logo 2" className="h-10 mx-auto" />
        <img src={girl1} alt="Logo 3" className="h-10 mx-auto" />
        <img src={girl1} alt="Logo 4" className="h-10 mx-auto" />
        <img src={girl1} alt="Logo 5" className="h-10 mx-auto" />
        <img src={girl1} alt="Logo 6" className="h-10 mx-auto" />
      </div>
    </div>
  );
};

export default CustomerRate;
