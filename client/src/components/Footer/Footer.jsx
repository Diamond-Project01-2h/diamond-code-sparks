// components/Footer/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.less';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a onClick={() => navigate('/about')}>ABOUT</a>
        <a onClick={() => navigate('/faq')}>FAQ</a>
        <a onClick={() => navigate('/help')}>HELP</a>
      </div>
    </footer>
  );
};

export default Footer;
