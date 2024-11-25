import React, { useEffect, useState } from "react";
import "../../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Snackbar, Alert } from "@mui/material";

import emailO from "../../../assets/profile.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { IP } from "../../Utils/Constent";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("company");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Convert email to lowercase before sending
    const emailLowercased = email.toLowerCase();

    try {
      const response = await fetch(`${IP}/api/v1/password-forgot/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "kajal",
        },
        body: JSON.stringify({ email: emailLowercased, userType }),
      });
      console.log(response);
      if (response.ok) {
        setMessage("A reset link has been sent to your email address.");
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/home");
        }, 3000); // Navigate after 3 seconds
      } else {
        setMessage("There was an error sending the reset link.");
        setOpenSnackbar(true);
      }
    } catch (error) {
      setMessage("There was an error sending the reset link. Please try again later.");
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex md:justify-evenly justify-center gap-2 items-start pt-10 px-4 sm:px-6 lg:px-8   ">
      <div data-aos="zoom-in" data-aos-duration="3000" className="border-2 border-gray-300 bg-white rounded-md p-5 max-w-lg w-full myshadow">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold flex justify-between items-center w-full mb-3">
            Forgot Your Password{" "}
            <Link className="text-2xl relative -top-4 -right-3" to="/home">
              <IoCloseCircleOutline />
            </Link>
          </h2>
          <p className="text-start text-wrap text-xs font-serif mb-4">
            After you click the button, we will send you a link to reset your password. Please check your inbox and spam folder for the email. <br />
          </p>

          <div className="mb-4">
            <label className="block text-xs  font-semibold  relative top-2 left-2 bg-white w-fit px-1" htmlFor="email">
              Enter Your Email
            </label>
            <input
              autoFocus
              className="border-2 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`buttonp text-white font-bold text-lg p-2 rounded-sm transition duration-300 ease-in-out ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending the link..." : "Forgot Password"}
          </button>
        </form>
        {/* {message && <p className='mt-2 text-center text-sm text-red-500'>{message}</p>} */}
      </div>

      <div className="hidden md:block">
        <div className="flex justify-start items-center">
          <img className="w-96" src={emailO} alt="" />
        </div>
      </div>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message={message} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleCloseSnackbar} severity={message.includes("error") ? "error" : "success"}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ForgotPass;
 