import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
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
      <div className="splash-content">
        <h1 className="splash-meet">Meet</h1>
        <img src={logo} alt="Hope AI Logo" className="splash-logo" />

        <div className="splash-bot-desc">Anti-Suicide Mental<br/>Health Bot</div>
        <img src={robot} alt="Hope-I Robot" className="splash-robot" />
      </div>
    </div>
  );
};

export default SplashScreen; 