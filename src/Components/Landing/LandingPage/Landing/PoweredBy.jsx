import React from "react";
import intro from "../../../../assets/introOne.jpg";


const PoweredBy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2">
            <i className="fas fa-smile text-green-500 text-3xl"></i>
            <i className="fas fa-smile text-green-500 text-xl"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="text-blue-600">Success Stories</span> Powered by CustKlen CRM
          </h1>
          <p className="text-gray-500 mt-2">
            Join our community of satisfied clients and experience the transformation firsthand.
          </p>
        </div>

        {/* Featured Client Section */}
        <div className="flex justify-center items-center mt-8">
          <div className="relative">
            <img
              src={intro}
              alt="Smiling woman giving an OK sign"
              className="rounded-full w-40 h-40 object-cover"
            />
            {/* Top-right Badge */}
            <div className="absolute top-0 right-0 bg-white p-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <img
                  src={intro}
                  alt="Two people icons"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div>
                  <p className="text-sm font-bold">Client Satisfaction</p>
                  <p className="text-xs text-gray-500">
                    14.9/15k <span className="text-green-500">25%</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Bottom-left Badge */}
            <div className="absolute bottom-0 left-0 bg-white p-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="fas fa-chart-bar text-blue-600"></i>
                <div>
                  <p className="text-sm font-bold">Insight Analysis</p>
                  <p className="text-xs text-gray-500">
                    Effectively manage modular, centralized risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Stories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Client 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
               src={intro}
              alt="Illumi Parker"
              className="rounded-full w-24 h-24 mx-auto object-cover"
            />
            <h3 className="text-lg font-bold mt-4">Illumi Parker</h3>
            <p className="text-sm text-gray-500">Marketing Manager, Tecld</p>
            <p className="text-sm mt-2">
              “We've seen a significant boost in our ROI and customer engagement.”
            </p>
          </div>
          {/* Client 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <img
               src={intro}
              alt="Nami Anderson"
              className="rounded-full w-24 h-24 mx-auto object-cover"
            />
            <h3 className="text-lg font-bold mt-4">Nami Anderson</h3>
            <p className="text-sm text-gray-500">Director Operations, Retail</p>
            <p className="text-sm mt-2">
              “Training & support were fantastic! It's highly recommended!”
            </p>
            {/* Overlay Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <i className="fas fa-arrow-right text-blue-600"></i>
              </div>
            </div>
          </div>
          {/* Client 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
               src={intro}
              alt="Sarah Zoldyck"
              className="rounded-full w-24 h-24 mx-auto object-cover"
            />
            <h3 className="text-lg font-bold mt-4">Sarah Zoldyck</h3>
            <p className="text-sm text-gray-500">CEO, TechSolutions Inc.</p>
            <p className="text-sm mt-2">
              “Our team is more efficient, and client satisfaction has never been higher!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;
