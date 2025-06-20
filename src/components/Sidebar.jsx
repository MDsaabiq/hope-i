import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>CHAT A.I+</h2>
      </div>
      <button className="new-chat-btn">+ New chat</button>
      <div className="conversations">
        <p className="conversations-title">Your conversations</p>
        {/* Conversation items will be mapped here */}
        <div className="conversation-item">
          <span>Create Chatbot GPT...</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 