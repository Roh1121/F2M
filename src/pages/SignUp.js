import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ onClose }) => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., API call)
    console.log({ userType, username, email, otp, password, location, address, language });
    onClose(); // Close the modal after submission
  };

  return (
    <div className="sign-up-overlay" onClick={onClose}>
      <form className="sign-up-modal" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <h2>Sign Up</h2>
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Email/Mobile No.:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          OTP:
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </label>
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;