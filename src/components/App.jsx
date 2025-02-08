import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ChatPage } from './components/ChatPage';
import { SignInPage } from './components/SignInPage';
import { NavBar } from './components/Nav';

const App = () => {
  return (
    <>
      <header className="header">
      
        <nav>
          {/* Render navigation bar */}
          <NavBar />
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
