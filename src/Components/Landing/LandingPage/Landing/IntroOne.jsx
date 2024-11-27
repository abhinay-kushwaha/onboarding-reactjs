import React from 'react';
import intro from "../../../../assets/introOne.jpg";

const IntroOne = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className='text-wrap'>
          <h1 className="text-3xl md:text-5xl font-bold">
            Your CRM <span className="text-blue-600">Solutions</span> for{" "}
            <span className="text-blue-600">Seamless Access</span> Anytime, Anywhere
          </h1>
          <div className="flex flex-wrap items-center mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((_, i) => (
                <img
                  key={i}
                  src={intro}
                  alt={`Reviewer ${i + 1}`}
                  className="w-10 h-10 object-cover rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">From 67k+ Reviews</span>
            <div className="ml-4 flex items-center">
              <span className="text-white bg-blue-600 rounded-full px-2 py-1 text-sm">4.9</span>
            </div>
          </div>
          <button className="mt-6 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
            Get Started Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative text-wrap">
          <img
            src={intro}
            alt="Person holding a phone and coffee"
            className="w-96 h-[50vh] object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm md:text-base">
            Data Insight
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg w-56 md:w-64">
            <div className="flex items-center">
              <div className="bg-green-200 text-green-800 p-2 rounded-full">
                <i className="fas fa-sync-alt"></i>
              </div>
              <div className="ml-2">
                <p className="text-gray-600 text-sm md:text-base">Customer Repeat</p>
                <p className="text-lg font-bold">
                  +14,720 <span className="text-green-600">70%</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-56 md:w-64">
            <div className="flex items-center">
              <div className="bg-blue-200 text-blue-800 p-2 rounded-full">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="ml-2">
                <p className="text-gray-600 text-sm md:text-base">Workflow Optimization</p>
                <p className="text-sm md:text-base font-bold">
                  Effortlessly streamline your operations and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap items-center">
        <img
         src={intro}
          alt="Person pointing upwards"
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">
            High Customer Retention with Rate <span className="text-black">25%</span>
          </h2>
          <p className="text-gray-600">
            Our tools help foster customer loyalty and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroOne;
