import React from 'react';
import './ChatArea.css';

const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="chat-messages">
        {/* Messages will be rendered here */}
        <div className="message user">
          <p>How can Hopi Anti Suicidal Chat Box help someone in need?</p>
        </div>
        <div className="message bot">
          <p>Hopi Anti Suicidal Chat Box is here to listen, support, and provide helpful resources to anyone struggling. You're not alone—reach out and let us help you or someone you care about.</p>
        </div>
      </div>
      <div className="chat-input-area">
        <input type="text" placeholder="What's in your mind?..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatArea; 