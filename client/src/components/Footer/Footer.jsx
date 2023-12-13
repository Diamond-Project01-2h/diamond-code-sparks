// components/Footer/Footer.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslator } from '../../Utils/useTranslator';
import { LanguageContext } from '../../Utils/LanguageContext';

import './Footer.less';

const Footer = ({textScale, textScaleUpdate}) => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const translate = useTranslator();
  const [translatedTexts, setTranslatedTexts] = useState({
  forParents: '',
  howItWorks: '',
  faq: '',
  startFreeTrial: '',
  login: '',
  forEducators: '',
  educatorResources: '',
  educatorLogin: '',
  professionalDevelopment: '',
  codeSparks: '',
  aboutUs: '',
  awards: '',
  press: '',
  contactUs: '',
  blog: '',
  partners: '',
  universityOfFlorida: '',
  nationalScienceFoundation: '',
  texasAandMUniversity: '',
  accessibility: '',
  increaseTextSize: '',
  decreaseTextSize: '',
  terms: '',
  privacy: '',
  doNotSellMyInfo: '',
  // ... other texts ...
});

const loadTranslations = async () => {
  const forParents = await translate('FOR PARENTS');
const howItWorks = await translate('How it works');
const faq = await translate('FAQ');
const startFreeTrial = await translate('Start a Free Trial');
const login = await translate('Login');
const forEducators = await translate('FOR EDUCATORS');
const educatorResources = await translate('Educator Resources');
const educatorLogin = await translate('Educator Login');
const professionalDevelopment = await translate('Professional Development');
const codeSparks = await translate('CODESPARKS');
const aboutUs = await translate('About Us');
const awards = await translate('Awards');
const press = await translate('Press');
const contactUs = await translate('Contact Us');
const blog = await translate('Blog');
const partners = await translate('PARTNERS');
const universityOfFlorida = await translate('University of Florida');
const nationalScienceFoundation = await translate('National Science Foundation');
const texasAandMUniversity = await translate('Texas A&M University');
const accessibility = await translate('ACCESSIBILITY');
const increaseTextSize = await translate('Increase Text Size');
const decreaseTextSize = await translate('Decrease Text Size');
const terms = await translate('Terms');
const privacy = await translate('Privacy');
const doNotSellMyInfo = await translate('Do Not Sell My Personal Information');


setTranslatedTexts({
    forParents,
  howItWorks,
  faq,
  startFreeTrial,
  login,
  forEducators,
  educatorResources,
  educatorLogin,
  professionalDevelopment,
  codeSparks,
  aboutUs,
  awards,
  press,
  contactUs,
  blog,
  partners,
  universityOfFlorida,
  nationalScienceFoundation,
  texasAandMUniversity,
  accessibility,
  increaseTextSize,
  decreaseTextSize,
  terms,
  privacy,
  doNotSellMyInfo,
  // ... Add other translations as needed ...
  });
};

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
    <footer className="footer">
      <div className="footer-content">
      
      <div className="footer-section">
        <h4>{translatedTexts.forParents}</h4>
        <a href="#">{translatedTexts.howItWorks}</a>
        <a onClick={() => navigate('/faq')} href="#">{translatedTexts.faq}</a>
        <a href="#">{translatedTexts.startFreeTrial}</a>
        <a href="#">{translatedTexts.login}</a>
      </div>
      <div className="footer-section">
        <h4>{translatedTexts.forEducators}</h4>
        <a href="#">{translatedTexts.educatorResources}</a>
        <a href="#">{translatedTexts.educatorLogin}</a>
        <a href="#">{translatedTexts.professionalDevelopment}</a>
      </div>
      <div className="footer-section">
        <h4>{translatedTexts.codeSparks}</h4>
        <a onClick={() => navigate('/about')} href="#">{translatedTexts.aboutUs}</a>
        <a href="#">{translatedTexts.awards}</a>
        <a href="#">{translatedTexts.press}</a>
        <a onClick={() => navigate('/help')} href="#">{translatedTexts.contactUs}</a>
        <a href="#">{translatedTexts.blog}</a>
      </div>
      <div className="footer-section">
        <h4>{translatedTexts.partners}</h4>
        <a href="#">{translatedTexts.universityOfFlorida}</a>
        <a href="#">{translatedTexts.nationalScienceFoundation}</a>
        <a href="#">{translatedTexts.texasAandMUniversity}</a>
      </div>
      <div className="footer-section">
        <h4>{translatedTexts.accessibility}</h4>
        <a onClick={increase}>{translatedTexts.increaseTextSize}</a>
        <a onClick={decrease}>{translatedTexts.decreaseTextSize}</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© CodeSparks 2023</span>
      <a href="#">{translatedTexts.terms}</a>
      <a href="#">{translatedTexts.privacy}</a>
      <a href="#">{translatedTexts.doNotSellMyInfo}</a>
    </div>
    </footer>
  );
};

export default Footer;
