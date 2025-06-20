import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import StoriesPage from './pages/StoriesPage';
import SupportPage from './pages/SupportPage';
import GamesPage from './pages/GamesPage';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import FloatingChatButton from './components/FloatingChatButton';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
      <Navbar />
      {location.pathname !== '/chat' && <FloatingChatButton />}
    </>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      <div className="App">
        {showSplash ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : (
          <AppContent />
        )}
      </div>
    </Router>
  );
}

export default App;
