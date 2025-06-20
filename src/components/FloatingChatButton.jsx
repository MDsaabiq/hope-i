import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingChatButton.css';
import chatIcon from '../assets/chat-icon.svg';

const FloatingChatButton = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <div className="floating-chat-button" onClick={handleChatClick}>
      <img src={chatIcon} alt="Chat" />
    </div>
  );
};

export default FloatingChatButton; 