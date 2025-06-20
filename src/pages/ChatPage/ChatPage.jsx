import React, { useState } from 'react';
import './ChatPage.css';
// import Sidebar from '../../components/Sidebar';
import ChatArea from '../../components/ChatArea';

const ChatPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="chat-page-container">
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        &#9776;
      </button>
      <div className={`side-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="close-menu-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {/* Minimal menu content here */}
        <div className="menu-content">
          <h3>Menu</h3>
          {/* Add menu items as needed */}
        </div>
      </div>
      <ChatArea />
    </div>
  );
};

export default ChatPage; 