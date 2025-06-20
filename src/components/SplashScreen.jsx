import React, { useEffect } from 'react';
import logo from '../assets/logo.jpg';
import robot from '../assets/robot.png';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="splash-meet">Meet</h1>
      <img src={logo} alt="Hope AI Logo" className="splash-logo" />
      <div className="splash-title-group">
        <h2 className="splash-title">HOPE AI</h2>
        <div className="splash-subtitle">SUICIDE PREVENTION TOOL</div>
        <div className="splash-powered">POWERED BY<br/>CYBER HELPS NGO</div>
      </div>
      <div className="splash-bot-desc">Anti-Suicide Mental<br/>Health Bot</div>
      <img src={robot} alt="Hope-I Robot" className="splash-robot" />
    </div>
  );
};

export default SplashScreen; 