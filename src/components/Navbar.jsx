import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import homeIcon from '../assets/home.svg';
import storiesIcon from '../assets/stories.svg';
import chatIcon from '../assets/chat.svg';
import gamesIcon from '../assets/games.svg';
import supportIcon from '../assets/support.svg';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
      <Link to="/stories" className={`nav-item ${location.pathname === '/stories' ? 'active' : ''}`}>
        <img src={storiesIcon} alt="Stories" />
        <span>Stories</span>
      </Link>
      <Link to="/chat" className={`nav-item ${location.pathname === '/chat' ? 'active' : ''}`}>
        <img src={chatIcon} alt="Chat" />
        <span>Chat</span>
      </Link>
      <Link to="/games" className={`nav-item ${location.pathname === '/games' ? 'active' : ''}`}>
        <img src={gamesIcon} alt="Games" />
        <span>Games</span>
      </Link>
      <Link to="/support" className={`nav-item ${location.pathname === '/support' ? 'active' : ''}`}>
        <img src={supportIcon} alt="Support" />
        <span>Support</span>
      </Link>
    </div>
  );
};

export default Navbar; 