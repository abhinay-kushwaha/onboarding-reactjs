import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import { FaApple, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import login from "../../../assets/login.gif";
import { message } from "antd";
import loginImg from "../../../assets/login.gif";

import AOS from "aos";
import "aos/dist/aos.css";
import { IP } from "../../Utils/Constent";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage(""); // Clear error message on input change
  };

  // Inside Login Component

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const endpoint = `${IP}/api/v1/login/login`;
    const bodyData = {
      email: formData.email.toLowerCase(),
      password: formData.password,
    };
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "kajal",
        },
        body: JSON.stringify(bodyData),
      });

      const result = await response.json();
      // console.log(result);

      if (response.ok) {
        const token = result.token;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("role", result.role);
        // toast.success("Login successfully.")

        // Call onLogin with the user's role to handle navigation
        onLogin(result.role);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        if (response.status === 401) {
          message.error("Invalid credentials");
        } else if (response.status === 404) {
          message.error("Mail not found");
        } else {
          message.error("Server error");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center items-center p-2 my-10">
      {/* {loading && <Loader />}  */}

       

      <div data-aos="zoom-in" data-aos-duration="3000" className="w-full flex p-2    justify-center  items-center">
        <div className="border border-gray-300 rounded-md p-4 max-w-lg w-full flex flex-col myshadow ">
          <div className="sm:text-2xl text-xl font-bold flex flex-col  justify-center items-center -mb-7">
            <h1 className="text-gray-700 w-full flex justify-center gap-2 items-center ">
              <img className="w-12" src={login} alt="" /> Welcome to <strong className="text-[#544541]">FOX PILOTS </strong>
            </h1>
            {/* <h1 className='text-sm font-normal w-full flex justify-center items-center '>
          To get started, please sign in
          </h1> */}
          </div>
          <div className="font-bold sm:text-2xl text-xl relative -top-7 -right-2 ml-auto">
            <Link to="/home">
              <IoCloseCircleOutline />
            </Link>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-xs px-1 font-semibold relative top-5 left-2 bg-white w-fit rounded-md" htmlFor="email">
              Email
            </label>
            <input autoFocus className="border-2 pl-2 p-2 w-full rounded-sm" type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
            <label className="text-xs px-1 font-semibold relative top-5 left-2 bg-white z-10 w-fit rounded-md" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="border-2 pl-2 p-2 w-full rounded-sm pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                {showPassword ? <FaEyeSlash onClick={togglePasswordVisibility} className="cursor-pointer" /> : <FaEye onClick={togglePasswordVisibility} className="cursor-pointer" />}
              </div>
            </div>
            <button
              className={` buttonp divide-purple-300 text-white font-bold text-lg p-1.5 rounded-sm mt-4 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Logining..." : "Login"}
            </button>
          </form>

          {/* <div className=" text-center">
            <p className="flex justify-center items-center">
              <h1 className="text-sm relative top-2 bg-white px-2 w-fit">Or with</h1>
            </p>
            <hr className="border-gray-300 mb-4" />
            <div className="flex justify-center items-center gap-1 mt-4">
              <h1 className="border rounded w-full flex justify-center items-center p-1 shadow-md focus:scale-110 focus:ease-in-out duration-300 "><FaGoogle className="text-red-500 w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-300" /></h1> 
              <h1 className="border rounded w-full flex justify-center items-center p-1 shadow-md focus:scale-110 focus:ease-in-out duration-300 "> <FaApple className="text-gray-800 w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-300" /></h1> 
              <h1 className="border rounded w-full flex justify-center items-center p-1 shadow-md focus:scale-110 focus:ease-in-out duration-300 "> <MdEmail className="text-blue-500 w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-300" /></h1> 
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center  text-xs font-semibold pt-2">
            <Link to="/signup">
              Don't have an account? <strong>Register</strong>
            </Link>
            <Link className="text-end" to="/forgotPass">
              Forgot Password?
            </Link>
          </div>
          {errorMessage && <div className="mt-3 text-red-600 font-bold text-center">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
