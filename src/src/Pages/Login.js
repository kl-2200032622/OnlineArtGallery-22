import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import axios from 'axios';

const LoginPage = () => {
  // State to store user login credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password
      });

      // Assuming server sends different responses based on login status
      if (response.data === "success") { // Modify this based on your server response
        navigate("/cart", { state: { id: email } });
      } else if (response.data === "failure") { // Modify this based on your server response
        navigate("/cart", { state: { id: email } });
      }
    } catch (failure) {
      navigate("/cart", { state: { id: email } });
      
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="loginsignup-login">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
