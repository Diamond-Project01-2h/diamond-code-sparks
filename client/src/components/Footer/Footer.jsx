// components/Footer/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import './Footer.less';

const Footer = ({textScale, textScaleUpdate}) => {
    const navigate = useNavigate();

    function increase(e) {
      e.preventDefault();
      
      const test = textScale;
  
      console.log("Increase called: " + test);
      textScaleUpdate(textScale + 0.25);
      console.log("Increase end: " + (test + 0.25));
  
    }
  
    function decrease(e) {
      if(textScale != 1) {
        e.preventDefault();
  
        const test = textScale;
        
        console.log("Decrease called: " + test);
        textScaleUpdate(textScale - 0.25);
        console.log("Decrease end: " + (test - 0.25));
  
      }
      else {
        console.log(textScale);
      }
    }
  
    return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h4>FOR PARENTS</h4>
          <a href="#">How it works</a>
          <a onClick={() => navigate('/faq')} href="#">FAQ</a>
          <a href="#">Start a Free Trial</a>
          <a href="#">Login</a>
        </div>
        <div className="footer-section">
          <h4>FOR EDUCATORS</h4>
          <a href="#">Educator Resources</a>
          <a href="#">Educator Login</a>
          <a href="#">Professional Development</a>
        </div>
        <div className="footer-section">
          <h4>CODESPARKS</h4>
          <a onClick={() => navigate('/about')} href="#">About Us</a>
          <a href="#">Awards</a>
          <a href="#">Press</a>
          <a onClick={() => navigate('/help')} href="#">Contact Us</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-section">
          <h4>PARTNERS</h4>
          <a href="#">University of Florida</a>
          <a href="#">National Science Foundation</a>
          <a href="#">Texas A&M University</a>
        </div>
        <div className="footer-section">
          <h4>ACCESSIBILITY</h4>
          <a onClick={increase}>Increase Text Size</a>
          <a onClick={decrease}>Decrease Text Size</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© CodeSparks 2023</span>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Do Not Sell My Personal Information</a>
      </div>
    </footer>
  );
};

export default Footer;
