import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import loginImg from "../../../assets/profile.jpg"
import "../../../App.css"
import { message } from 'antd';
 

import AOS from 'aos';
import 'aos/dist/aos.css';
import { IP } from '../../Utils/Constent';

const NewPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match. Please try again.');
      return;
    }
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${IP}/api/v1/password-forgot/reset/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'kajal'
        },
        body: JSON.stringify({ password, confirmPassword })
      });
        

      if (response.ok) {
        setMessage('Password reset successful.');
        toast.success("Password reset successful.");
        // console.log(response)
        navigate('/login');
      } else {
        const errorData = await response.json();
        // console.error('Server response:', errorData);
        setMessage(`Error: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setMessage('There was an error resetting the password. Please try again later.');
    }finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex justify-center items-center p-2 my-10'>
     <div className='w-full flex justify-center lg:justify-end items-center'>
     <div data-aos="zoom-in"
       data-aos-duration="3000"
      className='border-2 border-gray-300 rounded-md p-5 max-w-96  w-full flex flex-col justify-center  shadow gap-2'>
        <form onSubmit={handleSubmit}>
          <h2 className='sm:text-2xl text-xl font-bold flex justify-center items-center w-full mb-3'>
            Create Your Password
            <Link to="/home" className='font-bold sm:text-2xl text-xl relative -top-4 -right-12'>
              <IoCloseCircleOutline />
            </Link>
          </h2>
          <label className='text-xs px-1 font-semibold relative z-10 top-3 left-2 bg-white w-fit rounded-md' htmlFor="password">Enter New Password</label>
          <div className='relative'>
            <input autoFocus
              className='border-2 pl-2 p-2 w-full rounded-sm pr-10'
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder='Enter New Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
              {showPassword ? (
                <FaEyeSlash onClick={togglePasswordVisibility} className='cursor-pointer' />
              ) : (
                <FaEye onClick={togglePasswordVisibility} className='cursor-pointer' />
              )}
            </div>
          </div>
          <label className='text-xs px-1 font-semibold relative z-10 top-3 left-2 bg-white w-fit rounded-md' htmlFor="confirmPassword">Enter Confirm Password</label>
          <div className='relative'>
            <input
              className='border-2 pl-2 p-2 w-full rounded-sm pr-10'
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder='Enter Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
              {showConfirmPassword ? (
                <FaEyeSlash onClick={toggleConfirmPasswordVisibility} className='cursor-pointer' />
              ) : (
                <FaEye onClick={toggleConfirmPasswordVisibility} className='cursor-pointer' />
              )}
            </div>
          </div>
          <button 
           type="submit"
          className={`buttonp w-full   text-white font-bold text-lg p-2 rounded-sm mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting} 
          >
            {isSubmitting ? 'Adding new Password...' : 'New Password'}
          </button>
        </form>
        {message && <p className='mt-2 text-center text-sm text-red-500 text-wrap'>{message}</p>}
      </div>
     </div>

      <div className='hidden lg:block w-full'>
      <div data-aos="fade-up"
       data-aos-duration="3000"
       className='flex justify-center items-center'>
          <img className=' lg:w-96 ' src={loginImg} alt="" />
      </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast text-wrap"
      />
    </div>
  );
};

export default NewPassword;
