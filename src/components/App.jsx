import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { Search } from './Search';
import { TestPage } from './TestPage';
import { SignInPage } from './SignInPage';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/test" element={<TestPage listings={aptData}/>} /> 
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </>
    
  );
}

export default App;
