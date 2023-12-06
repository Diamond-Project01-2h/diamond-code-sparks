// components/Header/Header.jsx
import React from 'react';
import './Header.less';
import placeholderLogo from '../../assets/chasm.png'; // Replace with your actual logo
import { useNavigate } from 'react-router-dom';

const Header = ({textScale, textScaleUpdate}) => {
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
    <header className="header">
      <img src={placeholderLogo} alt="Logo" className="header-logo" style={{ width: '90px', height: 'auto' }} onClick={() => navigate('/')} />

      <nav className="header-navigation">

        {/* Dropdown for accesability features */}
      <div className="dropdown">
          <button className="dropbtn">Accessibility</button>
          <div className="dropdown-content">
          <a onClick={increase}>Increase Text Size</a>
          <a onClick={decrease}>Decrease Text Size</a>
          </div>
        </div>

        {/* Dropdown for Parents */}
        <div className="dropdown">
          <button className="dropbtn">Parents</button>
          <div className="dropdown-content">
            <a onClick={() => navigate('/how-it-works')}>How it Works</a>
            <a onClick={() => navigate('/faq')}>FAQ</a>
            <a onClick={() => navigate('/free-trial')}>Free Trial</a>
            <a onClick={() => navigate('/login')}>Login</a>
          </div>
        </div>
        {/* Dropdown for Educators */}
        <div className="dropdown">
          <button className="dropbtn">Educators</button>
          <div className="dropdown-content">
            <a onClick={() => navigate('/resources')}>Resources</a>
            <a onClick={() => navigate('/teacher-dashboard')}>Teacher Dashboard</a>
            <a onClick={() => navigate('/professional-development')}>Professional Development</a>
            <a onClick={() => navigate('/play-online')}>Play Online</a>
          </div>
        </div>
        {/* Existing Dropdown for About */}
        <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <a onClick={() => navigate('/about')}>About Us</a>
            <a onClick={() => navigate('/awards')}>Awards</a>
            <a onClick={() => navigate('/press')}>Press</a>
            <a onClick={() => navigate('/contact')}>Contact Us</a>
          </div>
        </div>
        <button onClick={() => navigate('/login')} className="login-button">LOGIN</button>
        <button onClick={() => navigate('/free-trial')} className="trial-button">JOIN A SESSION</button>
      </nav>
    </header>
  );
};

export default Header;
