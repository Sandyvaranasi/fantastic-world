import React, { useState } from 'react';
import { api } from '../src/App';
import { useNavigate } from 'react-router-dom';
import './password.css';

export default function Password() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post('/admin/pass', { password: password })
      .then((res) => {
        localStorage.setItem('token', res.data.data);
        navigate('/otp');
      })
      .catch((error) => alert(error.response.data.message));
  };

  return (
    <div className="password-container">
      <p className="password-description">
        Greetings admin! Welcome to the admin panel. Please enter your password to continue.
      </p>
      <h1 className="password-heading">Enter Your Password</h1>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          className="password-input"
          required
        />
        <button type="submit" className="password-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

