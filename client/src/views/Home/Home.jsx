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
    <Header textScale = {textScale} textScaleUpdate = {textScaleUpdate}/>
    <main className="home-main-content">
      {/* Introduction Section */}
<section className="home-introduction" style={{ textAlign: 'center', marginBottom: '20px' }}>
  <h1 className="intro-title" style={{ fontSize: `${25 * textScale}px`, margin: '10px 0' , fontWeight: 'bold' }}>Welcome to CodeSparks - Where Fun Meets Function in Coding!</h1>
  <p className="intro-text" style={{ fontSize: `${20 * textScale}px`}}>Step into a world where coding comes alive with colors, sounds, and interactive challenges! CodeSparks is the perfect place for young minds to learn the essentials of programming with Arduino-based block coding. With a mix of storytelling, puzzles, and hands-on projects, we make learning to code an adventure that captures the imagination and sparks a lifelong passion for technology.</p>
  <div className="intro-call-to-action" style={{ margin: '20px 0', color: 'white' }}>
    <button className="start-free-trial" style={{ marginRight: '10px' }}>Start Your Free Trial</button>
    <button className="learn-more">Learn More</button>
  </div>
</section>


      {/* Features Section */}
<section className="home-features">
  <h2 className="features-title" style={{ fontSize: `${25 * textScale}px` }}>Amazing Features to Boost Your Coding Skills!</h2>
  <div className="features-grid flex-container">
    {/* Feature 1: Block-Based Coding */}
    <div className="feature-item">
      <img src='https://atlassianblog.wpengine.com/wp-content/uploads/2020/12/brand-5328-t2-blog-illustration-17-ways-to-get-kids-coding-1120x545-@2x-1560x760.png' alt="Colorful Block-Based Coding" className="feature-image" />
      <h3 className="feature-title" style={{ fontSize: `${20 * textScale}px`, fontWeight: 'bold' }}>
  Drag & Drop Coding Blocks
</h3>

      <p className="feature-description" style={{ fontSize: `${20 * textScale}px`}}>Build your first program with easy-to-understand coding blocks! Our colorful interface is designed to teach coding logic in a way that feels like play.</p>
    </div>
    {/* Feature 2: Interactive Tutorials */}
    <div className="feature-item">
      <img src="data:image/jpeg;base64,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" alt="Interactive Tutorials" className="feature-image" />
      <h3 className="feature-title" style={{ fontSize: `${20 * textScale}px`, fontWeight: 'bold' }}>Interactive Tutorials</h3>
      <p className="feature-description" style={{ fontSize: `${20 * textScale}px`}}>Get guided through your first coding journey with fun tutorials that feel like a game. Each lesson is a step towards becoming a junior coding wizard!</p>
    </div>
    {/* Feature 3: Hardware Integration */}
    <div className="feature-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtDFMQ7RIi14YPMBRure1ldyVg_XrOZVSMw&usqp=CAU" alt="Arduino Hardware Projects" className="feature-image" />
      <h3 className="feature-title" style={{ fontSize: `${20 * textScale}px`, fontWeight: 'bold' }}>Real-World Projects</h3>
      <p className="feature-description" style={{ fontSize: `${20 * textScale}px`}}>Connect code to the real world by controlling lights, motors, and sensors with your creations. Watch your code come to life in exciting ways!</p>
    </div>
  </div>
</section>


      {/* Educational Benefits Section */}
      <section className="home-educational-benefits">
        <h2 className="benefits-title" style={{ fontSize: `${25 * textScale}px` , fontWeight: 'bold' }}>Educational Benefits Galore!</h2>
        <p className="benefits-intro" style={{ fontSize: `${20 * textScale}px`}}>At CodeSparks, we believe in learning that grows with you. Our platform offers a range of benefits designed to nurture young minds:</p>
        <ul className="benefits-list">
          <li className="benefit-item" style={{ fontSize: `${20 * textScale}px`}}>
  <span style={{ color: 'blue' }}>Critical Thinking</span> - Solve problems and design projects with a logical approach.
</li>

          <li className="benefit-item" style={{ fontSize: `${20 * textScale}px`}}>
  <span style={{ color: 'blue' }}>Creativity</span> - Let your imagination soar with unlimited project possibilities.
</li>

          <li className="benefit-item" style={{ fontSize: `${20 * textScale}px`}}>
  <span style={{ color: 'blue' }}>Collaboration</span> - Team up with friends and tackle coding challenges together.
</li>

<li className="benefit-item" style={{ fontSize: `${20 * textScale}px`}}>
  <span style={{ color: 'blue' }}>Communication</span> - Share your projects and ideas with the CodeSparks community.
</li>

        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials">
        <h2 className="testimonials-title" style={{ fontSize: `${25 * textScale}px`, fontWeight: 'bold' }}>Hear From Our Happy Coders!</h2>
        <div className="testimonials-container">
          {/* Testimonial 1 */}
          <blockquote className="testimonial">
            <p style={{ fontSize: `${20 * textScale}px`}}>"CodeSparks has made coding so much fun for my kids! They can't wait to show me what they've built after each lesson!" - Happy Parent</p>
          </blockquote>
          {/* Testimonial 2 */}
          <blockquote className="testimonial">
            <p style={{ fontSize: `${20 * textScale}px`}}>"I love how the lessons make me think. I feel like a real programmer!" - Excited Student</p>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-call-to-action">
        <h2 className="call-to-action-title" style={{ fontSize: `${22 * textScale}px` }}>Ready to Start Your Coding Adventure?</h2>
        <button className="join-now-button">Join Now!</button>
      </section>
    </main>
    <Footer textScale = {textScale} textScaleUpdate = {textScaleUpdate}/>
  </div>
  );
};

export default Home;
