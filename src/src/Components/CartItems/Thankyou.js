// ThankYou.js
import React from 'react';
import './Thankyou.css'; // Make sure the CSS file is correctly imported
import thankyou from '../Assests/Thankyou.jpg';

function ThankYou() {
  return (
    <div className="container">
      <h1 className="thank-you-heading">Thank You for Your Purchase!</h1>
      <img src={thankyou} alt="Thank You" className="thank-you-image" />
    </div>
  );
}

export default ThankYou;
