import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
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
        {/* Add other routes eventually */}
      </Routes>
    </>
  );
}

export default App;
