// components/Header/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.less';
import placeholderLogo from '../../assets/chasm.png'; // Make sure to add a placeholder logo image in your assets folder

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={placeholderLogo} alt="Placeholder Logo" className="header-logo" onClick={() => navigate('/')} />
      <div className="header-content">
        <button onClick={() => navigate('/join')} className="login-button">LOGIN</button>
      </div>
    </header>
  );
};

export default Header;
