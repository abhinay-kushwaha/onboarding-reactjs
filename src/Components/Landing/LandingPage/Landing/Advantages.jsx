import React from 'react';
import intro from "../../../../assets/introOne.jpg";



const Advantages = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-black text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <div className="bg-green-100 p-4 rounded-lg relative">
              <img
                src={intro}
                alt="Happy client looking at a phone"
                className="rounded-lg w-96 h-[70vh] object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-full shadow">
                <i className="fas fa-smile"></i>
              </div>
              <div className="absolute bottom-4 left-4 bg-white text-green-500 p-2 rounded-full shadow">
                <i className="fas fa-smile"></i>
              </div>
              <div className="absolute bottom-4 right-4 bg-white text-green-500 p-2 rounded-full shadow">
                <i className="fas fa-smile"></i>
              </div>
              <div className="absolute bottom-4 left-16 bg-white text-black p-2 rounded-lg shadow">
                Happy Client!
              </div>
              <div className="absolute top-16 right-4 bg-white text-black p-2 rounded-lg shadow">
                <div>Business Growth</div>
                <div className="text-blue-500">
                  $14,720 <span className="text-green-500">25%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-wrap w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              Explore <span className="text-green-500">the advantages</span> of partnering with CustKlen
            </h1>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
                <div>
                  <h2 className="font-bold">Efficiency Boost:</h2>
                  <p>
                    Our CRM is designed to optimize your daily operations and workflows, reducing redundancy and inefficiencies.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
                <div>
                  <h2 className="font-bold">Scalable Solutions:</h2>
                  <p>
                    Regardless of the size of your business, CustKlen's CRM solutions can adapt to your needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
                <div>
                  <h2 className="font-bold">Dedicated Support:</h2>
                  <p>
                    Rest easy knowing that our dedicated support team is available to assist you.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">4</div>
                <div>
                  <h2 className="font-bold">Enhanced Growth:</h2>
                  <p>
                    Our tools help businesses achieve sustained growth and build stronger customer relationships.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
