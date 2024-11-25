import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import gif from "../../../assets/login.gif";
import OTPVerifyImg from "../../../assets/profile.jpg";
import { IP } from "../../Utils/Constent";

const OTPVerify = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [timer, setTimer] = useState(150); // 2.5 minutes in seconds
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || ""; // Retrieve email from location state

  useEffect(() => {
    let interval = null;

    if (!resendEnabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setResendEnabled(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [resendEnabled]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    // console.log("OTP entered:", otpCode);
    try {
      const response = await fetch(`${IP}/api/v1/corporate/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otpCode }),
      });

      const data = await response.json();
      // console.log("Response data:", data);

      if (data.message && data.message.toLowerCase().includes("successfully")) {
        message.success("Email verification successfully.");
        navigate("/thankuForSign");
      } else {
        message.error("Invalid OTP, please try again.");
        setOpen(true);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      message.error("An error occurred, please try again.");
      setOpen(true);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch(`${IP}/api/v1/corporate/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "kajal",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      // console.log("Resend OTP response data:", data);
      message.success("OTP has been resent to your email.");
    } catch (error) {
      console.error("Error during OTP resend:", error);
      setError("An error occurred while resending OTP.");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center m-10">
      <div className="hidden md:block w-full">
        <div className="flex justify-center items-center">
          <img className="lg:w-2/3" src={OTPVerifyImg} alt="OTP Verification" />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center md:items-start">
        <form className="p-5 px-10 max-w-md w-full bg-white border rounded shadow-md" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start items-center mb-5">
            <h2 className="text-2xl font-bold text-center text-gray-800">Enter the OTP</h2>
            <h2 className="text-2xl font-semibold font-mono text-center text-gray-800 flex flex-col gap-1">
              <strong className="text-gray-500 text-sm">
                Sent to Your Email: <br />
              </strong>
              <h1 className="font-bold text-sm text-black flex justify-center items-center gap-1  ">
                {email} <img className="w-8" src={gif} alt="Email Sent" />
              </h1>
            </h2>
          </div>
          <div className="flex justify-between mb-6 space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                className="sm:w-12 w-8 sm:h-12 h-8 text-center text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <button type="submit" className="w-full px-4 py-2  buttonp">
              Verify OTP
            </button>
            <div className="flex justify-end">
              <button type="button" onClick={handleResendOtp} disabled={!resendEnabled} className="mt-2 text-sm font-bold">
                {resendEnabled ? "Resend OTP" : `Resend in ${Math.floor(timer / 60)}:${timer % 60}`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerify;
