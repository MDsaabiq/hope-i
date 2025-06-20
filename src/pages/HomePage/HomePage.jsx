import React from 'react';
import './HomePage.css';
import logo from '../../assets/homelogo.png';
import homevideo from '../../assets/homevideo.mp4';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header">
        <img src={logo} alt="logo" style={{width: '70px', height: '70px', marginRight: '16px'}} />
        <h1 style={{color: '#444', fontSize: '3rem', fontWeight: 700, letterSpacing: '1px', margin: 0}}>Hope-I</h1>
      </div>
      <video className="main-video" src={homevideo} autoPlay loop muted playsInline poster="/assets/video-poster.jpg" />
      <div className="help-text">
        <h2 style={{fontSize: '2.5rem', color: '#444', fontWeight: 700, marginBottom: 8}}>Help Us! Help You!</h2>
        <p style={{fontSize: '1.1rem', color: '#555', margin: 0}}>Please answer honestly</p>
        <p style={{fontSize: '1.1rem', color: '#555', margin: 0}}>We're here to support you -- not judge you. <br />
        The more true your answers are, the better <b>HOPE-I</b> can help.</p>
      </div>
      <div className="doctors-card">
        <div style={{fontSize: '1.1rem', color: '#444', marginBottom: 8}}>Real doctors with</div>
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
          <span className="experience" style={{fontSize: '4rem', color: '#222', fontWeight: 700, marginRight: 8}}>12+</span>
          <span style={{fontSize: '1.1rem', color: '#444', fontWeight: 500, marginBottom: 8}}>years</span>
        </div>
        <div style={{fontSize: '1.1rem', color: '#444'}}>of experience are here for you.</div>
      </div>
      <p className="quote" style={{fontSize: '1.3rem', color: '#444', fontStyle: 'italic', margin: '24px 0 80px 0'}}>
        “Honesty heals faster. Let's take the first step together.”
      </p>
    </div>
  );
};

export default HomePage; 