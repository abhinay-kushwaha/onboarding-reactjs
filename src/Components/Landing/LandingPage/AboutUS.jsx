import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const AboutUS = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();  // Initialize AOS on component mount
  }, [location]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-wrap">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Fox Pilots is a premium clothing brand that blends contemporary style
          with timeless elegance. We are committed to providing high-quality
          clothing that elevates your everyday wardrobe.
        </p>
        <div className="mt-8 grid gap-12 lg:grid-cols-3 md:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to create fashion that empowers individuals and
              expresses personal style with comfort and confidence.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              We envision becoming a global leader in fashion, known for our
              innovative designs and commitment to sustainability.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-gray-600">
              We value creativity, inclusivity, and sustainability, ensuring
              that every piece of clothing we produce reflects our ethical
              standards and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
