import React from 'react';
import './HomePage.css';
import logo from '../../assets/homelogo.png';
import homevideo from '../../assets/homevideo.mp4';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Hope-I</h1>
      </div>
      <video className="main-video" src={homevideo} autoPlay loop muted playsInline poster="/assets/video-poster.jpg" />
      <div className="help-text">
        <h2>Help Us! Help You!</h2>
        <p>Please answer honestly</p>
        <p>We're here to support you -- not judge you. The more true your answers are, the better HOPE-I can help.</p>
      </div>
      <div className="doctors-card">
        <p>Real doctors with</p>
        <span className="experience">12+</span>
        <p>years of experience are here for you.</p>
      </div>
      <p className="quote">“Honesty heals faster. Let's take the first step together.”</p>
    </div>
  );
};

export default HomePage; 