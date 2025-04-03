import React, { useState } from 'react';
import './Login.css';

const Login = ({ onClose = () => {} }) => {  // Default function to prevent errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    onClose(); // Close modal after login
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <form className="login-modal" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button> {/* Close button */}
        <h2>Login</h2>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
