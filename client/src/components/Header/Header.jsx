// components/Header/Header.jsx
import React, { useContext, useState, useEffect } from 'react';
import './Header.less';
import placeholderLogo from '../../assets/chasm.png'; // Replace with your actual logo
import { useNavigate } from 'react-router-dom';
import { useTranslator } from '../../Utils/useTranslator';
import { LanguageContext } from '../../Utils/LanguageContext';

const Header = ({textScale, textScaleUpdate}) => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  //const { changeLanguage } = useContext(LanguageContext);
  const translate = useTranslator();
  const [translatedTexts, setTranslatedTexts] = useState({
    parents: '',
    howItWorks: '',
    faq: '',
    freeTrial: '',
    login: '',
    educators: '',
    resources: '',
    teacherDashboard: '',
    professionalDevelopment: '',
    playOnline: '',
    about: '',
    aboutUs: '',
    awards: '',
    press: '',
    contactUs: '',
    language: '',
    loginButton: '',
    joinSessionButton: '',
    accessibility: '',
    increaseTextSize: '',
    decreaseTextSize: '',
    // ... other texts ...
  });
// Function to handle language change
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

// Function to load translations
  const loadTranslations = async () => {
    const parents = await translate('Parents');
    const howItWorks = await translate('How it Works');
    const faq = await translate('FAQ');
    const freeTrial = await translate('Free Trial');
    const login = await translate('Login');
    const educators = await translate('Educators');
    const resources = await translate('Resources');
    const teacherDashboard = await translate('Teacher Dashboard');
    const professionalDevelopment = await translate('Professional Development');
    const playOnline = await translate('Play Online');
    const about = await translate('About');
    const aboutUs = await translate('About Us');
    const awards = await translate('Awards');
    const press = await translate('Press');
    const contactUs = await translate('Contact Us');
    const language = await translate('Language');
    const loginButton = await translate('LOGIN');
    const joinSessionButton = await translate('JOIN A SESSION');
    const accessibility = await translate('Accessibility');
    const increaseTextSize = await translate('Increase Text Size');
    const decreaseTextSize = await translate('Decrease Text Size');
    // ... Load other translations ...

 setTranslatedTexts({
      parents,
      howItWorks,
      faq,
      freeTrial,
      login,
      educators,
      resources,
      teacherDashboard,
      professionalDevelopment,
      playOnline,
      about,
      aboutUs,
      awards,
      press,
      contactUs,
      language,
      loginButton,
      joinSessionButton,
      accessibility,
      increaseTextSize,
      decreaseTextSize,
      // ... Set other translated texts ...
    });
  };

// Load translations when component mounts or language changes
  useEffect(() => {
    loadTranslations();
  }, [language]);

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
          <button className="dropbtn">{translatedTexts.accessibility}</button>
          <div className="dropdown-content">
          <a onClick={increase}>{translatedTexts.increaseTextSize}</a>
          <a onClick={decrease}>{translatedTexts.decreaseTextSize}</a>
          <a onClick={() => handleLanguageChange('en')}>English</a>
          <a onClick={() => handleLanguageChange('es')}>Español</a>
          <a onClick={() => handleLanguageChange('fr')}>Français</a>
          </div>
        </div>

        {/* Dropdown for Parents */}
        <div className="dropdown">
          <button className="dropbtn">{translatedTexts.parents}</button>
          <div className="dropdown-content">
            <a onClick={() => navigate('/how-it-works')}>{translatedTexts.howItWorks}</a>
            <a onClick={() => navigate('/faq')}>{translatedTexts.faq}</a>
            <a onClick={() => navigate('/free-trial')}>{translatedTexts.freeTrial}</a>
            <a onClick={() => navigate('/login')}>{translatedTexts.login}</a>
          </div>
        </div>
        {/* Dropdown for Educators */}
        <div className="dropdown">
          <button className="dropbtn">{translatedTexts.educators}</button>
          <div className="dropdown-content">
            <a onClick={() => navigate('/resources')}>{translatedTexts.resources}</a>
            <a onClick={() => navigate('/teacher-dashboard')}>{translatedTexts.teacherDashboard}</a>
            <a onClick={() => navigate('/professional-development')}>{translatedTexts.professionalDevelopment}</a>
            <a onClick={() => navigate('/play-online')}>{translatedTexts.playOnline}</a>
          </div>
        </div>
        {/* Existing Dropdown for About */}
        <div className="dropdown">
          <button className="dropbtn">{translatedTexts.about}</button>
          <div className="dropdown-content">
            <a onClick={() => navigate('/about')}>{translatedTexts.aboutUs}</a>
            <a onClick={() => navigate('/awards')}>{translatedTexts.awards}</a>
            <a onClick={() => navigate('/press')}>{translatedTexts.press}</a>
            <a onClick={() => navigate('/contact')}>{translatedTexts.contactUs}</a>
          </div>
        </div>
        <button onClick={() => navigate('/login')} className="login-button">{translatedTexts.loginButton}</button>
        <button onClick={() => navigate('/free-trial')} className="trial-button">{translatedTexts.joinSessionButton}</button>
      </nav>
    </header>
  );
};

export default Header;
