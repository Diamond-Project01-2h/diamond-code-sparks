// components/Home/Home.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.less';
import uf from '../../assets/uf_logo.png';
import { useState } from "react";


function Home({textScale, textScaleUpdate}) {

  
    return (
  <div className="home-container">
    <Header />
    <main className="home-main-content">
      {/* Introduction Section */}
      <section className="home-introduction">
        <h1 className="intro-title" style={{ fontSize: `${20 * textScale}px` }}>Welcome to CodeSparks - Where Fun Meets Function in Coding!</h1>
        <p className="intro-text">Step into a world where coding comes alive with colors, sounds, and interactive challenges! CodeSparks is the perfect place for young minds to learn the essentials of programming with Arduino-based block coding. With a mix of storytelling, puzzles, and hands-on projects, we make learning to code an adventure that captures the imagination and sparks a lifelong passion for technology.</p>
        <div className="intro-call-to-action">
          <button className="start-free-trial">Start Your Free Trial</button>
          <button className="learn-more">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <h2 className="features-title" style={{ fontSize: `${20 * textScale}px` }}>Amazing Features to Boost Your Coding Skills!</h2>
        <div className="features-grid">
          {/* Feature 1: Block-Based Coding */}
          <div className="feature-item">
            <img src='https://via.placeholder.com/150' alt="Colorful Block-Based Coding" className="feature-image"/>
            <h3 className="feature-title">Drag & Drop Coding Blocks</h3>
            <p className="feature-description">Build your first program with easy-to-understand coding blocks! Our colorful interface is designed to teach coding logic in a way that feels like play.</p>
          </div>
          {/* Feature 2: Interactive Tutorials */}
          <div className="feature-item">
            <img src="https://via.placeholder.com/150" alt="Interactive Tutorials" className="feature-image"/>
            <h3 className="feature-title">Interactive Tutorials</h3>
            <p className="feature-description">Get guided through your first coding journey with fun tutorials that feel like a game. Each lesson is a step towards becoming a junior coding wizard!</p>
          </div>
          {/* Feature 3: Hardware Integration */}
          <div className="feature-item">
            <img src="https://via.placeholder.com/150" alt="Arduino Hardware Projects" className="feature-image"/>
            <h3 className="feature-title">Real-World Projects</h3>
            <p className="feature-description">Connect code to the real world by controlling lights, motors, and sensors with your creations. Watch your code come to life in exciting ways!</p>
          </div>
        </div>
      </section>

      {/* Educational Benefits Section */}
      <section className="home-educational-benefits">
        <h2 className="benefits-title" style={{ fontSize: `${20 * textScale}px` }}>Educational Benefits Galore!</h2>
        <p className="benefits-intro">At CodeSparks, we believe in learning that grows with you. Our platform offers a range of benefits designed to nurture young minds:</p>
        <ul className="benefits-list">
          <li className="benefit-item">Critical Thinking - Solve problems and design projects with a logical approach.</li>
          <li className="benefit-item">Creativity - Let your imagination soar with unlimited project possibilities.</li>
          <li className="benefit-item">Collaboration - Team up with friends and tackle coding challenges together.</li>
          <li className="benefit-item">Communication - Share your projects and ideas with the CodeSparks community.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials">
        <h2 className="testimonials-title" style={{ fontSize: `${20 * textScale}px` }}>Hear From Our Happy Coders!</h2>
        <div className="testimonials-container">
          {/* Testimonial 1 */}
          <blockquote className="testimonial">
            <p>"CodeSparks has made coding so much fun for my kids! They can't wait to show me what they've built after each lesson!" - Happy Parent</p>
          </blockquote>
          {/* Testimonial 2 */}
          <blockquote className="testimonial">
            <p>"I love how the lessons make me think. I feel like a real programmer!" - Excited Student</p>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-call-to-action">
        <h2 className="call-to-action-title" style={{ fontSize: `${20 * textScale}px` }}>Ready to Start Your Coding Adventure?</h2>
        <button className="join-now-button">Join Now!</button>
      </section>
    </main>
    <Footer textScale = {textScale} textScaleUpdate = {textScaleUpdate}/>
  </div>
  );
};

export default Home;
