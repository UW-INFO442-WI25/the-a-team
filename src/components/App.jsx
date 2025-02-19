import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { ChatPage } from './ChatPage';
import { SignInPage } from './SignInPage';
import { NavBar } from './Nav';

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
