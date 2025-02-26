import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { SignInPage } from './SignInPage';
import { ListingPage } from './ListingPage';
import { NavBar } from './Nav';

// Dataset
import aptData from '/data/apartment-data.json';


const App = () => {
  return (
    <>
      <header className="header">
        <nav>
          {/* Render navigation bar for desktop*/}
          <NavBar />
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage listings={aptData}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/apartment/:id" element={<ListingPage />} />
      </Routes>
    </>
    
  );
}

export default App;