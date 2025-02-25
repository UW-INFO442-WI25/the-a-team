import React from 'react';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { Search } from './Search';
import { SignInPage } from './SignInPage';
import { NavBar } from './Nav';
import ApartmentDescription from './ApartmentDescription'; // Import ApartmentDescription


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
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/apartment/:id" element={<ApartmentDescription />} />
        </Routes>
    </>
    
  );
}

export default App;
