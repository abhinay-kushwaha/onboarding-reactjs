import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import checkform from "../../../assets/login.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Confetti from 'react-confetti';
import "../../../App.css";

const ThankuSign = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [confettiVisible, setConfettiVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiVisible(false);
    }, 8000); // 8 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleClose = () => {
    navigate('/login'); 
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {confettiVisible && <Confetti />}
      <div data-aos="fade-up" data-aos-duration="3000" className='flex p-10 gap-2 sm:w-1/2 flex-col justify-center items-center'>
        <img
          data-aos="zoom-in"
          data-aos-duration="3000"
          className='w-16 mb-5 '
          src={checkform}
          alt="successful"
        />
        <h2 className='font-bold text-3xl sm:text-5xl text-[#29AA9E]'>Thank you!</h2>
        <h3 className='font-bold text-xl sm:text-2xl text-[#29AA9E]'>for signing up with Streamline!</h3>
        <p className="text-center text-lg sm:text-xl mt-4 text-wrap mb-2">
          {/* Thank you for signing up with the <strong className='text-[#55CDF1]'>Lead Management System</strong> */}
          
          We are thrilled to have you join us and appreciate your interest in our platform. Your registration was successful, and we are excited to support you in optimizing your company’s operations. Our team will be in touch to ensure you get the most out of your experience with Streamline.
        </p>
        <div>
          <button className='button3d' onClick={handleClose}>Go to Login</button>
        </div>
      </div>
    </div>
  );
};

export default ThankuSign;
















// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import  checkform from "../../assets/check-mark.png"

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const ThankuSign = () => {
//   const navigate = useNavigate();
//   const location = useLocation();



//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   const handleClose = () => {
//     navigate('/login'); 
//   };


//   useEffect(() => {
//     AOS.init();
//   }, []);
//   return (
//     <div className='flex flex-col justify-center items-center w-full'>
//       <div data-aos="fade-up"
//      data-aos-duration="3000"
//        className='flex p-10 gap-2 sm:w-1/2 flex-col justify-center items-center'>
//         <img
//          data-aos="zoom-in"
//      data-aos-duration="3000"
//          className='w-16 mb-5'   src={checkform} alt="successful" />
//         <h2 className='font-bold text-3xl sm:text-5xl  text-[#29AA9E]'>Thank you!</h2>
//         <h3 className='font-bold text-xl sm:text-2xl text-[#29AA9E]'>We Have Received Your Request</h3>
//         <p className="text-center text-lg sm:text-xl mt-4  text-wrap mb-2">
//           Thank you for signing up with the <strong className='text-[#55CDF1]'>Lead Management System</strong>. We sincerely appreciate your interest in joining our team and your effort in submitting an application.
//         </p>

        
//       <div className=''>
//         <button className='text-center text-xl font-bold bg-[#55CDF1] hover:bg-[#29AA9E] text-white p-1 px-4 rounded-sm' onClick={handleClose} >Go to Login</button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ThankuSign;
