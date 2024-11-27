import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { IoCloseCircleOutline } from "react-icons/io5";
import Team from "../../../assets/profile.jpg";
import { IP } from "../../Utils/Constent";
import "../../../App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

 
 

const SignUp = () => {
  const [formData, setFormData] = useState({
    CorporateName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert email to lowercase before submitting
    const formDataToSubmit = {
      ...formData,
      email: formData.email.toLowerCase(), // Email ko lowercase me convert karna
    };
  
    if (formDataToSubmit.password.length < 8) {
      message.error("Password must be at least 8 characters long");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch(`${IP}/api/v1/corporate/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "kajal",
        },
        body: JSON.stringify(formDataToSubmit), // Lowercase email ke sath submit kare
      });
  
      const result = await response.json();
      if (response.ok) {
        message.success("Please verify your email.");
        setTimeout(() => {
          navigate("/otpVerify", { state: { email: formDataToSubmit.email } });
        }, 1000); // 1-second delay
      } else {
        message.error(result.message || "User already exists");
      }
    } catch (error) {
      message.error("An error occurred while registering up");
    } finally {
      setLoading(false);
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center w-full p-2 py-10">
  

  

      <div className="hidden lg:block w-full">
        <div className="flex justify-center items-center">
          <img className="lg:w-2/3" src={Team} alt="OTP Verification" />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className=" border-b-4  border border-gray-100 border-b-[#544541] bg-white rounded-md p-3 max-w-md w-full flex flex-col shadow">
          <div className="sm:text-2xl text-xl font-bold flex justify-center">
            <h1 className="text-center w-full">
              You’re one step closer <br />
              <span className="">to less hassle</span>
            </h1>
            <Link to="/home" className="font-bold sm:text-2xl text-xl relative -top-1 -right-1">
              <IoCloseCircleOutline />
            </Link>
          </div>
          <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          
            <label className="text-xs px-1 font-semibold relative top-3 left-2 bg-white w-fit rounded-md" htmlFor="name">
              First Name
            </label>
            <input className="border-2 pl-2 p-2 w-full rounded-sm" type="text" name="firstName" placeholder="Enter Your First Name" value={formData.firstName} onChange={handleChange} required />
            <label className="text-xs px-1 font-semibold relative top-3 left-2 bg-white w-fit rounded-md" htmlFor="name">
              Last Name
            </label>
            <input className="border-2 pl-2 p-2 w-full rounded-sm" type="text" name="lastName" placeholder="Enter Your Last Name" value={formData.lastName} onChange={handleChange} required />
            <label className="text-xs px-1 font-semibold relative top-3 left-2 bg-white w-fit rounded-md" htmlFor="email">
              Email
            </label>
            <input className="border-2 pl-2 p-2 w-full rounded-sm" type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
           
            <label className="text-xs px-1 font-semibold relative z-10 top-3 left-2 bg-white w-fit rounded-md" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="border-2 pl-2 p-2 w-full rounded-sm pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                {showPassword ? <FaEyeSlash onClick={togglePasswordVisibility} className="cursor-pointer" /> : <FaEye onClick={togglePasswordVisibility} className="cursor-pointer" />}
              </div>
            </div>
            <button className="buttonp text-white font-bold text-lg p-2 rounded-sm mt-4 flex items-center justify-center focus:scale-105 focus:ease-in-out duration-300" type="submit">
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"> {" "}Registering...</circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              ) : (
                "Register"
              )}
            </button>
          </form>

   
        </div>
      </div>
    </div>
  );
};

export default SignUp;
 
