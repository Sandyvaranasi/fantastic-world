import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './otp.css';

export default function Otp() {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = value;
    setOtpDigits(updatedOtpDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const otp = otpDigits.join('');
    // axios
    //   .post('http://localhost:3000/api/auth', { OTP: otp })
    //   .then(() => navigate('/hurrah'))
    //   .catch((error) => alert(error.response.data.message));
  };

  return (
    <div className="otp-container">
      <p className="otp-heading">Enter the One-Time Password (OTP) sent to your email.</p>
      <form onSubmit={handleSubmit}>
        <div className="otp-inputs">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="otp-input"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          ))}
        </div>
        <div className="button-container">
          <button type="submit" className="otp-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
