import React from 'react';
import intro from "../../../../assets/introOne.jpg";


const Services = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-gray-600">
            At CustKlen, we offer a range of tailored CRM services to address your unique business requirements. Our services include:
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            Tailored Solutions with our{" "}
            <span className="text-blue-600">Comprehensive CRM Services</span>
          </h1>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-6">
          {/* Training Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
            <div className="flex-shrink-0">
              <div className="bg-blue-600 text-white rounded-full p-3 mb-4 md:mb-0 md:mr-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2">
                Comprehensive <span className="text-black">Training</span> to Empower Your Team
              </h2>
              <p className="text-gray-600 mb-4">
                Our expert team offers in-depth training sessions to ensure your staff is proficient in using CustKlen CRM to its full potential. Our dedicated support team is available round the clock to provide assistance.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded">
                See How It Works
              </button>
            </div>
          </div>

          {/* Other Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Migration Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full p-3 mb-4">
                <i className="fas fa-database"></i>
              </div>
              <h2 className="text-xl font-bold mb-2">Data Migration</h2>
              <p className="text-gray-600 mb-4">
                Safely and efficiently transfer into CustKlen.
              </p>
              <img
                src={intro}
                alt="Customization dashboard with various charts and graphs"
                className="rounded-lg w-96 h-72 object-cover"
              />
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-gray-600">Business Growth</p>
                  <p className="text-black font-bold">$14,720</p>
                </div>
                <div>
                  <p className="text-gray-600">Engagement</p>
                  <p className="text-green-600 font-bold">
                    16.8K <span className="text-xs">(↑8.5%)</span>
                  </p>
                </div>
              </div>
              
            </div>

            {/* Customization Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full p-3 mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h2 className="text-xl font-bold mb-2">Customization</h2>
              <p className="text-gray-600 mb-4">
                Customize CRM to align with your workflows.
              </p>
              <img
                src={intro}
                alt="Customization dashboard with various charts and graphs"
                className="rounded-lg w-96 h-72 object-cover"
              />
            </div>

            {/* Call to Action Card */}
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md flex items-center justify-center"
             style={{
                backgroundImage: `url(${intro})`,
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat", 
            }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Join us now for your business growth!
                </h2>
                <button className="bg-black text-white px-4 py-2 rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
