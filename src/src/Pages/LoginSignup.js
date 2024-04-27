import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  // State to store user credentials and checkbox status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // Access the navigate function using useNavigate
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can perform signup actions here

    // Check if the checkbox is selected
    if (isCheckboxChecked) {
      // Redirect to the login page after signing up
      navigate('/login');
    } else {
      // Display an error or message to the user
      alert('Please agree to the terms of use and privacy policy.');
    }
  };

  // Function to toggle the checkbox status
  const handleCheckboxChange = useCallback(() => {
    setIsCheckboxChecked(!isCheckboxChecked);
  }, [isCheckboxChecked]);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Your Name"
              required
            />
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
          <div>
            <label>
              <input
                type="checkbox"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
              />
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
