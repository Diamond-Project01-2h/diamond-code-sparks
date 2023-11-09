// components/Home/Home.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.less';

const Home = () => (
  <div className="home-container">
    <Header />
    <main className="home-main-content">
      <section className="home-intro">
        <h1>Welcome to CASMM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </section>
      <section className="home-features">
        <div className="feature-item">
          <img src="https://via.placeholder.com/150" alt="Feature 1" />
          <h2>Feature One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/150" alt="Feature 2" />
          <h2>Feature Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/150" alt="Feature 3" />
          <h2>Feature Three</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
